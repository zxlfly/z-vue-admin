<template>
    <div class="box">
        <!-- <div class="title">左右结构表格</div> -->
        <headerSearch>
            <template #title>
                <div class="header-title">左右结构表格</div>
            </template>
            <template #button>
                <el-button type="success">新增</el-button>
            </template>
            <el-form :model="form" inline>
                <el-form-item label="名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age" />
                </el-form-item>
                <el-form-item>
                    <div class="search-botton">
                        <el-button type="primary">搜索</el-button>
                        <el-button>重置</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </headerSearch>
        <div class="bottom">
            <div class="left">
                <div class="table-box">
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%; height: 100%"
                    >
                        <el-table-column
                            type="index"
                            label="序号"
                            width="80"
                            show-overflow-tooltip
                        />
                        <el-table-column
                            prop="date"
                            label="时间"
                            width="180"
                            show-overflow-tooltip
                        />
                        <el-table-column
                            prop="name"
                            label="名称"
                            width="180"
                            show-overflow-tooltip
                        >
                            <template #default="{ row }">
                                <div class="table-icon">
                                    <el-icon><User /></el-icon>
                                    {{ row.name }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="Address"
                            show-overflow-tooltip
                        />
                    </el-table>
                </div>
                <div class="pagination-box">
                    <el-pagination
                        v-model:current-page="currentPage"
                        v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 50, 100]"
                        small
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
            <div class="right">
                <div class="table-box">
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%; height: 100%"
                    >
                        <el-table-column
                            type="index"
                            label="序号"
                            width="80"
                            show-overflow-tooltip
                        />
                        <el-table-column
                            prop="date"
                            label="时间"
                            width="180"
                            show-overflow-tooltip
                        />
                        <el-table-column
                            prop="name"
                            label="名称"
                            width="180"
                            show-overflow-tooltip
                        >
                            <template #default="{ row }">
                                <div class="table-icon">
                                    <el-icon><User /></el-icon>
                                    {{ row.name }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="Address"
                            show-overflow-tooltip
                        />
                    </el-table>
                </div>
                <div class="pagination-box">
                    <el-pagination
                        v-model:current-page="currentPage"
                        v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 50, 100]"
                        small
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import headerSearch from "@/components/headerSearch/index.vue"

// 搜索
const form = reactive({
    name: "",
    age: "",
})

// 列表数据
const tableData = reactive([
    {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
])

// 分页组件
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(tableData.length)
const handleSizeChange = () => {}
const handleCurrentChange = () => {}
</script>

<style lang="scss" scoped>
@import "@/assets/style/views/table";

$title-height: 40px;
$title-height: 40px;

.box {
    display: flex;
    flex-direction: column;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: bold;

        // margin-bottom: 20px;
        height: $title-height;
    }

    .bottom {
        // height: calc(100% - 90px - 40px);
        margin-top: 20px;
        flex: 1;
        display: flex;
        overflow: auto;

        .left {
            width: calc(50% - 20px);
            margin-right: 20px;
            padding: 20px;
            padding-top: 10px;
            background-color: var(--z-admin-layout-table-bg);
            border-radius: 6px;
            box-shadow: var(--z-admin-layout-shadow);
            z-index: 99;
        }

        .right {
            width: 50%;
            padding: 20px;
            padding-top: 10px;
            background-color: var(--z-admin-layout-table-bg);
            border-radius: 6px;
            box-shadow: var(--z-admin-layout-shadow);
            z-index: 99;
        }

        .table-box {
            height: calc(100% - 44px);
            margin-bottom: 20px;
        }

        .pagination-box {
            display: flex;
            justify-content: end;
        }
    }
}
</style>
