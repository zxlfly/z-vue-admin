<template>
    <div class="tabbar">
        <Logo />
        <div class="tabbar-cont">
            <div class="tabbar_left">
                <BreadCrumb />
            </div>
            <div class="tabbar_right">
                <Setting />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="Tabbar">
import BreadCrumb from "./Breadcrumb/index.vue"
import Setting from "./Setting/index.vue"
import Logo from "../Logo/index.vue"
</script>

<style lang="scss" scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;

    // background-image: linear-gradient(
    // 	to right,
    // 	rgb(236, 229, 229),
    // 	rgb(151, 136, 136),
    // 	rgb(240, 234, 234)
    // );
    .tabbar-cont {
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
    }
}
</style>
