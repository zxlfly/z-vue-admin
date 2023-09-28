<template>
    <div class="header">
        <slot name="title"></slot>
        <div class="header-buttom">
            <slot name="button"></slot>
            <el-dropdown style="margin-left:10px" trigger="click">
                <el-button type="primary">
                    搜索<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <slot></slot>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
	import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang='scss' scoped>
.header {
    display: flex;
    // justify-content: space-between;
    background-color: var(--z-admin-layout-table-bg);
    padding: 12px 20px;
    border-radius: 6px;
    box-shadow: var(--z-admin-layout-shadow);
    .header-buttom{
        flex:1;
        text-align:end;
    }
}
:deep(.el-form){
    width:300px;
    padding:10px;
    .el-form-item{
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
    }
    .search-botton{
        width: 100%;
        text-align: center;
    }
    .el-form-item--default .el-form-item__content > div{
        width: 100% !important;
    }
}
:deep(.header-title){
    font-size: 20px;
    font-weight: bold;
}
</style>
