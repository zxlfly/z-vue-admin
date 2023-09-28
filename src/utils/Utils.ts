Date.prototype.format = function (fmt) {
    // author: meizz
    const o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "H+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(), // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            `${this.getFullYear()}`.substr(4 - RegExp.$1.length),
        )
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1
                    ? o[k]
                    : `00${o[k]}`.substr(`${o[k]}`.length),
            )
        }
    }
    return fmt
}
export default {
    // 从blob中下载文件
    downloadFileByBlob(blob, filename) {
        const blobUrl = window.URL.createObjectURL(blob)
        const eleLink = document.createElement("a")
        eleLink.download = filename
        eleLink.style.display = "none"
        eleLink.href = blobUrl
        // 触发点击
        document.body.appendChild(eleLink)
        eleLink.click()
        // 然后移除
        document.body.removeChild(eleLink)
    },
    /**
     * @title  深克隆
     * @Description:
     * @Param target
     * @Author ykd
     * @Date 2020/9/9 11:48
     * @return
     */
    deepClone(target) {
        // 定义一个变量
        let result
        // 如果当前需要深拷贝的是一个对象的话
        if (typeof target === "object") {
            // 如果是一个数组的话
            if (Array.isArray(target)) {
                result = [] // 将result赋值为一个数组，并且执行遍历
                for (const i in target) {
                    // 递归克隆数组中的每一项
                    result.push(this.deepClone(target[i]))
                }
                // 判断如果当前的值是null的话；直接赋值为null
            } else if (target === null) {
                result = null
                // 判断如果当前的值是一个RegExp对象的话，直接赋值
            } else if (target.constructor === RegExp) {
                result = target
            } else {
                // 否则是普通对象，直接for in循环，递归赋值对象的所有值
                result = {}
                for (const i in target) {
                    result[i] = this.deepClone(target[i])
                }
            }
            // 如果不是对象的话，就是基本数据类型，那么直接赋值
        } else {
            result = target
        }
        // 返回最终结果
        return result
    },
    /**
     *@Title 保留几位小数
     *@Param number 原数字
     *@Param unit 保留位数
     *@Return
     *@Description
     *@Author ykd
     *@Date 2020/9/9 14:56
     */
    keepDecimal(number, unit) {
        const num = 10 ** unit
        let result = parseFloat(number)
        if (isNaN(result)) {
            return false
        }
        result = Math.round(number * num) / num
        return result
    },

    /**
     *@Title 导出文件
     *@Param mod
     *@Return
     *@Description
     *@Author ykd
     *@Date 2020/9/17 10:40
     */
    export(filename, data) {
        const urlObject = (window.URL ||
            window.webkitURL ||
            window) as typeof window.URL
        const export_blob = new Blob([data])
        const save_link: any = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "a",
        )
        save_link.href = urlObject.createObjectURL(export_blob)
        save_link.download = filename
        const ev = document.createEvent("MouseEvents")
        ev.initMouseEvent(
            "click",
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null,
        )
        save_link.dispatchEvent(ev)
    },

    /**
     * 格式化文件大小
     * @param filesize
     * @returns {string}
     */
    renderSize(value) {
        if (value == null || value === "") {
            return "0 Bytes"
        }
        const unitArr = [
            "Bytes",
            "KB",
            "MB",
            "GB",
            "TB",
            "PB",
            "EB",
            "ZB",
            "YB",
        ]
        let index = 0
        const srcsize = parseFloat(value)
        index = Math.floor(Math.log(srcsize) / Math.log(1024))
        let size: string | number = srcsize / 1024 ** index
        size = size.toFixed(2) // 保留的小数位数
        return size + unitArr[index]
    },

    /**
     * 日期格式化
     * @param fmt
     * @param date
     * @returns {*}
     */
    dateFormat(fmt, date) {
        let ret
        const opt = {
            "Y+": date.getFullYear().toString(), // 年
            "m+": (date.getMonth() + 1).toString(), // 月
            "d+": date.getDate().toString(), // 日
            "H+": date.getHours().toString(), // 时
            "M+": date.getMinutes().toString(), // 分
            "S+": date.getSeconds().toString(), // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        }
        for (const k in opt) {
            ret = new RegExp(`(${k})`).exec(fmt)
            if (ret) {
                fmt = fmt.replace(
                    ret[1],
                    ret[1].length === 1
                        ? opt[k]
                        : opt[k].padStart(ret[1].length, "0"),
                )
            }
        }
        return fmt
    },

    // 去除数组中重复的元素,返回重复的元素
    removeDuplicate(arr) {
        const tmp = []
        arr.forEach((item) => {
            arr.indexOf(item) !== arr.lastIndexOf(item) &&
                tmp.indexOf(item) === -1 &&
                tmp.push(item)
        })
        return tmp
    },

    setSession(key, value) {
        sessionStorage.setItem(key, value)
    },
    getSession(key) {
        const item = sessionStorage.getItem(key)
        return item
    },
    delSession(key) {
        const session = this.getSession(key)
        if (session !== undefined && session !== null) {
            return sessionStorage.removeItem(key)
        }
    },
    // 获取jwt令牌
    getJwt() {
        const activeUser = this.getActiveUser()
        if (activeUser) {
            return activeUser.jwt
        }
    },

    /**
     * 循环添加树结构序号
     *必填 @param tableData 树结构数据
     *必填 @param childName 子节点名称
     * @param depName 生成的序号字段名，默认dep
     */
    cycleNumber(treeData: any[], childName: string, depName = "dep") {
        function deep(tree, dep) {
            if (!tree || !tree.length) {
                return
            }
            tree.forEach((item, index) => {
                if (dep === 0) {
                    item[depName] = `${dep + index + 1}`
                } else {
                    item[depName] = `${dep}.${index + 1}`
                }
                deep(item[childName], item[depName])
            })
        }

        deep(treeData, 0)
    },

    cycleNumber2(treeData: any[], childName: string, depName = "dep") {
        let index1 = 1
        for (const item1 of treeData) {
            item1[depName] = index1
            index1++

            let index2 = 1
            for (const item2 of item1[childName]) {
                index2 = index2 > 26 ? 1 : index2
                const alphabet = String.fromCharCode(64 + index2).toLowerCase()
                item2[depName] = alphabet
                index2++

                let index3 = 1
                for (const item3 of item2[childName]) {
                    item3[depName] = `(${index3})`
                    index3++

                    let index4 = 1
                    for (const item4 of item3[childName]) {
                        item4[depName] = `${index1 - 1}.${alphabet}.${
                            index3 - 1
                        }.${index4}`
                        index4++
                    }
                }
            }
        }
    },
    // 获取实例状态描述
    getCaseStateName(state: number): string {
        return state === 0
            ? "未开始"
            : state === 1
            ? "运行中"
            : state === 2
            ? "暂停"
            : state === 3
            ? "已完成"
            : state === 4
            ? "待执行"
            : state === 5
            ? "失败"
            : ""
    },
    // 获取实例状态颜色
    getCaseStateColor(state: number): string {
        return state === 0
            ? "#E6A23C"
            : state === 1
            ? "#67C23A"
            : state === 2
            ? "#F56C6C"
            : state === 3
            ? "#67C23A"
            : state === 4
            ? "#409EFF"
            : state === 5
            ? "#F56C6C"
            : ""
    },
}
