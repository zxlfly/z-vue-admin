import axios, {
    type AxiosRequestConfig,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios"
import { LocalStorageService } from "@/utils/storage"
import { TOKEN } from "@/config/cache"
import { setRequest } from "./useCancelDuplicateRequest"
// 类型扩展文件件types目录
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    // timeout: 10000,
})
// 全局的loading控制
import { showLoading, closeLoading } from "./useRequestCount"
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        setRequest(config)
        const { loading = true, needToken = true } = config
        const token = LocalStorageService.get(TOKEN)
        if (loading) showLoading()
        console.log("needToken", needToken)

        if (token && needToken) {
            config.headers["Authorization"] = "Bearer " + token // 让每个请求携带自定义token 请根据实际情况自行修改
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { config } = response
        const { loading = true } = config
        if (loading) closeLoading()
        return response.data
    },
    (error) => {
        closeLoading()
        return Promise.reject(error)
    },
)

function request<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        service
            .request<any, T>(config)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

export function get<T = any>(
    url: string,
    config?: AxiosRequestConfig<T>,
): Promise<T> {
    return request<T>({ ...config, method: "GET", url })
}

export default service
