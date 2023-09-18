import axios, {
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
declare module "axios" {
	interface InternalAxiosRequestConfig<D = any, T = any> {
		needToken?: boolean;
		loading?: boolean;
	}
}
declare module "axios" {
	interface AxiosRequestConfig<D = any> {
		needToken?: boolean;
		loading?: boolean;
	}
}
