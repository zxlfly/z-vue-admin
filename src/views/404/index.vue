<template>
    <div class="box-404">
        <img src="/src/assets/img/404.png" />
        <h3>抱歉，页面不见了～</h3>
        <span>请查看网络连接情况，尝试刷新页面</span>
        <span class="link" @click="toHome">返回首页</span>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const toHome = () => {
    router.push("/home")
}
</script>

<style>
.box-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 22vh 0;

    img {
        width: 264px;
    }

    h3 {
        width: 270px;
        height: 25px;
        color: #575d6c;
        font-weight: bolder;
        font-size: 18px;
        line-height: 25px;
        text-align: left;
        text-align: center;
        margin: 18px 0;
    }

    span {
        /* min-width: 250px; */
        height: 20px;
        color: #8a8e99;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 18px;
    }

    .link {
        color: #409eff;
        cursor: pointer;
    }

    .el-btn {
        text-align: center;
    }
}
</style>
