<template>
    <div class="box">
        <div class="tree-box">
            <div class="left">
                <el-input v-model="filterText" placeholder="过滤关键字" />
                <treePackage />
            </div>
            <div class="right">
                <headerSearch>
                    <template #title>
                        <div class="header-title">树结构表格</div>
                    </template>
                    <template #button>
                        <el-button type="success">新增</el-button>
                    </template>
                    <el-form :model="form" label-suffix=":" inline>
                        <el-form-item label="名称">
                            <el-input v-model="form.name" />
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
                            <el-table-column
                                label="操作"
                                fixed="right"
                                width="170"
                            >
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
                                            <el-button
                                                size="small"
                                                type="danger"
                                            >
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
        </div>
    </div>
</template>

<script setup lang="ts">
import headerSearch from "@/components/headerSearch/index.vue"
import treePackage from "@/components/treePackage/index.vue"

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

// 树
const data = [
    {
        id: 1,
        label: "Level one 1",
        children: [
            {
                id: 4,
                label: "Level two 1-1",
                children: [
                    {
                        id: 9,
                        label: "Level three 1-1-1",
                    },
                    {
                        id: 10,
                        label: "Level three 1-1-2",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: "Level one 2",
        children: [
            {
                id: 5,
                label: "Level two 2-1",
            },
            {
                id: 6,
                label: "Level two 2-2",
            },
        ],
    },
    {
        id: 3,
        label: "Level one 3",
        children: [
            {
                id: 7,
                label: "Level two 3-1",
            },
            {
                id: 8,
                label: "Level two 3-2",
            },
        ],
    },
]
const defaultProps = {
    children: "children",
    label: "label",
}
const getLeve = (node, data) => {
    console.log(node, data)
}
const filterText = ref("")
const treeRef = ref()
watch(filterText, (val) => {
    treeRef.value!.filter(val)
})
const filterNode = (value: string, data: any) => {
    if (!value) return true
    return data.label.includes(value)
}

// 分页组件
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

    .tree-box {
        display: flex;

        // overflow: auto;
        height: calc(100%);

        .left {
            width: 20%;
            margin-right: 20px;
            padding: 20px;
            background-color: var(--z-admin-layout-table-bg);
            border-radius: 6px;
            box-shadow: var(--z-admin-layout-shadow);
            z-index: 99;
        }

        .right {
            width: calc(80% - 20px);

            /* flex: 1; */
            height: 100%;
            display: flex;
            flex-direction: column;

            .bottom {
                height: calc(100% - 90px);
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
    }
}
</style>
