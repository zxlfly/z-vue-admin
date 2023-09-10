<template>
	<el-form
		ref="loginFormRef"
		:model="loginForm"
		:rules="loginRules"
		class="w-full px-4 mx-auto"
	>
		<el-form-item prop="account">
			<el-input v-model="loginForm.account"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="loginForm.password"></el-input>
		</el-form-item>
		<el-button type="primary" @click="submitForm"> 登录 </el-button>
	</el-form>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import type { FormInstance, FormRules } from "element-plus";

const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
	account: "admin",
	password: "adminadmin",
});

const loginRules = reactive<FormRules>({
	account: [
		{
			required: true,
			trigger: "blur",
			message: "请输入账号",
		},
		{
			min: 5,
			max: 20,
			message: "长度在5-20之间",
		},
	],
	password: [
		{
			required: true,
			trigger: "blur",
			message: "请输入密码",
		},
		{
			min: 6,
			max: 20,
			message: "长度在6-20之间",
		},
	],
});
const router = useRouter();
const useUser = useUserStore();
const submitForm = async () => {
	await loginFormRef.value?.validate((valid, fields) => {
		if (valid) {
			useUser.login().then((res) => {
				console.log(res);
			});
			// router.push("/");
		} else {
			console.log("error submit!", fields);
		}
	});
};
</script>

<style></style>
