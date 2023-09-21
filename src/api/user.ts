import service from "@/request/";
import type { S } from "mockjs";
// 登录请求返回的信息
export interface UserLogin {
	message?: string;
	token?: any;
}
// 获取用户信息
export interface UserLoginInfo {
	userId: number;
	avatar: string;
	username: string;
	password: string;
	desc: string;
	roles: Array<string>;
	buttons: Array<string>;
	routes: Array<string>;
	token: string;
}
// 登录请求的返回类型
export interface UserLoginRequest<T> {
	code: number;
	data: T;
}
// 登陆请求参数类型
export interface LoginForm {
	userName: string;
	password: string;
}
// export function loginApi(data: LoginForm) {
// 	console.log(data);

// 	return service.post<UserLoginRequest<UserLoginData>>("/login", data);
// }

export async function loginApi(
	userName: string,
	password: string
): Promise<UserLoginRequest<UserLogin>> {
	return new Promise((resolve, reject) => {
		service
			.post<any, UserLoginRequest<UserLogin>>(
				"login",
				{
					userName: userName,
					password: password,
				},
				{
					needToken: false,
				}
			)
			.then(function (data) {
				return resolve(data);
			})
			.catch(function (error) {
				console.log(error);
				reject({ message: "登录失败" });
			});
	});
}
export async function getUserInfo(): Promise<UserLoginRequest<UserLoginInfo>> {
	return new Promise((resolve, reject) => {
		service
			.get<any, UserLoginRequest<UserLoginInfo>>("/user/info")
			.then(function (data) {
				return resolve(data);
			})
			.catch(function (error) {
				console.log(error);
				reject({ message: "获取用户信息失败" });
			});
	});
}
