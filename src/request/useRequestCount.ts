import { ElLoading } from "element-plus";
//@ts-ignore
const loadingInstance = ElLoading.service;
// 记录请求数量 默认开启全局loading，可以在请求头中配置是否开启
let requestCount = 0;
export const showLoading = () => {
	requestCount++;
	if (requestCount === 1) loadingInstance();
};
export const closeLoading = () => {
	requestCount--;
	if (requestCount === 0) loadingInstance().close();
};
