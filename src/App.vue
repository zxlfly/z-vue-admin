<script setup lang="ts">
import { ref } from "vue"
let count = ref(0)
let count2 = count.value > 0 ? 1 : 0
console.log(count2)
console.log(import.meta.env)
</script>

<template>
    <div>
        <el-button>333</el-button>
        <el-icon color="red">
            <i-ep-menu />
        </el-icon>
        <el-icon color="red">
            <i-ep-Plus />
        </el-icon>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    .test {
        color: red;

        .test2 {
            color: blue;
        }
    }
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
