import Highcharts from "highcharts/highstock"

export const useChartStore = defineStore("useChartStore", () => {
    /**
     * key：domId
     * value: Highcharts配置
     */
    let chartOptions: { [id: string]: Highcharts.ChartOptions } = {}
    /**
     * key: domId
     * value: Highcharts实例
     */
    const chartObj: { [id: string]: Highcharts.Chart } = {}

    const Hc: any = Highcharts

    // 全局配置
    Hc.setOptions({
        lang: {
            resetZoom: "返回",
            loading: "数据加载中...",
        },
    })

    // 初始化
    const init = (options: { [id: string]: Highcharts.ChartOptions }) => {
        chartOptions = {
            ...chartOptions,
            ...options,
        }
        render()
    }

    // 渲染highcharts图表
    const render = (redraw?: boolean) => {
        for (const id in chartOptions) {
            // 是否重绘
            if (redraw) {
                const chart = chartObj[id]
                chart?.destroy()
            }
            // 渲染图表
            const container = document.getElementById(id)
            if (container) {
                chartObj[id] = Hc.chart(container, chartOptions[id])
            }
        }
    }

    // 切换暗黑模式
    const setDarkMode = (isDark: boolean) => {
        if (isDark) {
            Hc.theme = darkTheme
        } else {
            Hc.theme = baseTheme
        }
        Hc.setOptions(Hc.theme)
        render(true)
    }

    // 销毁图表
    const destroy = (ids: string | string[]) => {
        if (typeof ids === "string") {
            destroyChartFun(ids)
        } else if (ids.length) {
            ids.forEach((id) => destroyChartFun(id))
        }
    }

    // 图表销毁方法
    const destroyChartFun = (id: string) => {
        const chart = chartObj[id]
        chart?.destroy()
        delete chartOptions[id]
        delete chartObj[id]
    }

    return {
        init,
        render,
        setDarkMode,
        destroy,
    }
})

const darkTheme = {
    colors: [
        "#058DC7",
        "#50B432",
        "#ED561B",
        "#DDDF00",
        "#24CBE5",
        "#64E572",
        "#FF9655",
        "#FFF263",
        "#6AF9C4",
    ],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, "rgb(0, 0, 0)"],
                [1, "rgb(0, 0, 0)"],
            ],
        },
    },
    title: {
        style: {
            color: "#fff",
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
        },
    },
    subtitle: {
        style: {
            color: "#666666",
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
        },
    },
    legend: {
        itemStyle: {
            font: "9pt Trebuchet MS, Verdana, sans-serif",
            color: "#fff",
        },
        itemHoverStyle: {
            color: "gray",
        },
    },
}

const baseTheme = {
    colors: [
        "#058DC7",
        "#50B432",
        "#ED561B",
        "#DDDF00",
        "#24CBE5",
        "#64E572",
        "#FF9655",
        "#FFF263",
        "#6AF9C4",
    ],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, "rgb(255, 255, 255)"],
                [1, "rgb(255, 255, 255)"],
            ],
        },
    },
    title: {
        style: {
            color: "#000",
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
        },
    },
    subtitle: {
        style: {
            color: "#666666",
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
        },
    },

    legend: {
        itemStyle: {
            font: "9pt Trebuchet MS, Verdana, sans-serif",
            color: "black",
        },
        itemHoverStyle: {
            color: "gray",
        },
    },
}
