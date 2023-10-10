<template>
    <div class="login-container">
        <div class="login-form">
            <div class="login-title">
                <img :src="pro" alt="" />
                Z Vue Admin
            </div>
            <div class="login-subtitle">中后台解决方案</div>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                :rules="loginRules"
                class="w-full px-4 mx-auto"
            >
                <el-form-item prop="account">
                    <el-input
                        v-model="loginForm.account"
                        :prefix-icon="User"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="loginForm.password"
                        type="password"
                        :prefix-icon="Lock"
                        :show-password="true"
                    ></el-input>
                </el-form-item>

                <el-button class="login-btn" type="primary" @click="submitForm">
                    登录
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user"
import type { FormInstance, FormRules } from "element-plus"
import pro from "@/assets/img/pro.png"
import { User, Lock } from "@element-plus/icons-vue"
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
    account: "admin",
    password: "123456",
})

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
})
const router = useRouter()
const useUser = useUserStore()
const submitForm = async () => {
    await loginFormRef.value?.validate((valid, fields) => {
        if (valid) {
            useUser.login(loginForm.account, loginForm.password).then((res) => {
                console.log(res)
            })
            // router.push("/");
        } else {
            console.log("error submit!", fields)
        }
    })
}
</script>

<style scoped scss>
body {
    overflow: hidden;
}

.login-container {
    width: 100%;
    height: 100vh;
    background: url("@/assets/img/img_log.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-form {
        width: 450px;
        background: #fff;
        padding: 60px 40px;
        box-shadow: 0 0 2px 2px #eef0f5;

        .login-title {
            color: rgb(0 0 0 / 70%);
            font-weight: bold;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                margin-right: 10px;
            }
        }

        .login-subtitle {
            text-align: center;
            margin-top: 12px;
            margin-bottom: 40px;
            color: rgb(0 0 0 / 50%);
            font-size: 14px;
        }

        .login-btn {
            width: 100%;
        }
    }

    @media screen and (width <= 450px) {
        .login-form {
            width: 100%;

            .login-title {
                font-size: 16px;

                img {
                    margin-right: 4px;
                }
            }

            .login-subtitle {
                font-size: 13px;
            }
        }
    }
}
</style>
