<script setup lang="ts">
const { proxy } = getCurrentInstance()!
const msg = ref("3333")
const handle = () => {
    proxy?.$message({
        message: "123123",
        grouping: true,
        type: "success",
    })
}
</script>

<template>
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <el-button @click="handle">按钮</el-button>
    <HelloWorld :msg="msg" />
</template>

<style scoped lang="scss">
.logo {
    height: 6em;
    padding: 1.5em;
    transition: filter 300ms;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
