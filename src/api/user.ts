import { get } from "@/request/";
export interface UserLoginData {
	age: number;
	name: string;
	token: string;
	role: string;
}
export interface UserLoginRequest<T> {
	code: number;
	message: string;
	result: T;
	type: string;
}
export function loginApi() {
	return get<UserLoginRequest<UserLoginData>>("/login");
}
