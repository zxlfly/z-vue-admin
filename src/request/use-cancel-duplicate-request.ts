import type { InternalAxiosRequestConfig } from "axios"

const requestMap = new Map()

export function setRequest(config: InternalAxiosRequestConfig<any>) {
    // 如果存在改请求，取消存在，发送最近的这个
    const controller = new AbortController()
    const key = config.data + config.url
    config.signal = controller.signal
    if (requestMap.has(key)) {
        requestMap.get(key).abort()
        requestMap.delete(key)
    }
    requestMap.set(key, controller)
}
