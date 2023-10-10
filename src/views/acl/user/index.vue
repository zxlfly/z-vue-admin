<template>
    <div class="box">
        <headerSearch>
            <template #title>
                <div class="header-title">上下结构表格</div>
            </template>
            <template #button>
                <el-button type="success">新增</el-button>
            </template>
            <el-form :model="form" label-suffix=":" inline>
                <el-form-item label="名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="年龄">
                    <el-select v-model="form.value" placeholder="Select">
                        <el-option label="label" value="1" />
                    </el-select>
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
                    <el-table-column prop="name" label="名称" width="180">
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
                    <el-table-column label="操作" fixed="right" width="170">
                        <template #default="{ row }">
                            <el-button
                                size="small"
                                type="warning"
                                style="margin-right: 10px"
                            >
                                编辑
                            </el-button>

                            <el-popconfirm title="确定要删除吗?">
                                <template #reference>
                                    <el-button size="small" type="danger">
                                        删除
                                    </el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
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
</template>

<script setup lang="ts">
import headerSearch from "@/components/headerSearch/index.vue"
const form = reactive({
    name: "",
    age: "",
})

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

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(tableData.length)
const handleSizeChange = () => {}
const handleCurrentChange = () => {}
</script>

<style lang="scss" scoped>
@import "@/assets/style/views/table";

.box {
    display: flex;
    flex-direction: column;
    height: 100%;

    .bottom {
        background-color: var(--z-admin-layout-table-bg);
        padding: 20px;
        padding-top: 10px;
        margin-top: 20px;
        border-radius: 6px;
        box-shadow: var(--z-admin-layout-shadow);
        flex: 1;
        z-index: 99;
        display: flex;
        flex-direction: column;
        overflow: auto;

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
