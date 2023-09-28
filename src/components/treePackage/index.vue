<template>
	<div  class="filter-box" @click="isMenu=false">
		<el-tree ref="treeRef" class="filter-tree" :data="data" :props="defaultProps" default-expand-all
		@node-contextmenu="treeContextmenu" @node-click="handleNodeClick">
			<template #default="{ node, data }">
				<div class="filter-tree-node">
					<el-icon class="filter-tree-node-icon" v-if="node.level === 1"><Files /></el-icon>
					<el-icon class="filter-tree-node-icon" v-if="node.level === 2"><Folder /></el-icon>
					<el-icon class="filter-tree-node-icon" v-if="node.level > 2"><Tickets /></el-icon>
					<span>{{ node.label }}</span>
				</div>
			</template>
		</el-tree>
		<div class="filter-tree-dropdown" v-if="props.isContextmenu&&isMenu">
			<div class="filter-tree-dropdown-item" v-for="item,index in menuList" :key="index">{{item.name}}</div>
		</div>
	</div>
    <!-- <el-scrollbar class="filter-box">
	</el-scrollbar> -->
</template>

<script setup lang="ts">
    import { ElDropdown } from 'element-plus'
    const isMenu = ref(false)
    const defaultProps = {
		children: 'children',
		label: 'label',
	}

    const props = defineProps({
		api: Function, // 请求接口
		menuList:{
			type: Array,
			default: [
				{name:'查看属性'},
			],
		},
		isContextmenu:{ // 是否需要右键下拉菜单
			type: Boolean,
			default: true,
		},
	});
    const emits = defineEmits(['handleNodeClick']);

    onMounted(() => {
		getTree();
	});

    // 获取树结构数据
    const getTree = async()=> {
        let res = props.api ? await props.api() : ''
		if (res&&res.success) {

        }
    }
    // 树结构右键事件
    const treeContextmenu = (event,data,node)=> {
		if(props.isContextmenu){
			isMenu.value = true
			nextTick(()=>{
				let dom = document.querySelector('.filter-tree-dropdown')
				console.log(dom);
				dom.style.top = (event.clientY)+'px'
				dom.style.left = (event.clientX-0)+'px'
			})
		}
        // console.log(event,data,node);
    }
    // 树结构行点击事件
    const handleNodeClick = (data, node)=> {
        // console.log(data,node);
        emits('handleNodeClick', data, node);
    }
    
    // 树
	const data = [
		{
			id: 1,
			label: 'Level one 1',
			children: [
				{
					id: 4,
					label: 'Level two 1-1',
					children: [
						{
							id: 9,
							label: 'Level three 1-1-1',
						},
						{
							id: 10,
							label: 'Level three 1-1-2',
						},
					],
				},
			],
		},
		{
			id: 2,
			label: 'Level one 2',
			children: [
				{
					id: 5,
					label: 'Level two 2-1',
				},
				{
					id: 6,
					label: 'Level two 2-2',
				},
			],
		},
		{
			id: 3,
			label: 'Level one 3',
			children: [
				{
					id: 7,
					label: 'Level two 3-1',
				},
				{
					id: 8,
					label: 'Level two 3-2',
				},
			],
		},
	]
</script>

<style lang='scss' scoped>
	@import '@/assets/style/views/table.scss';
	.filter-box{
		width:100%;
		height:97%;
		.filter-tree{
			margin-top:10px;
			height:100%;
			position: relative;
			overflow: auto;
			:deep(.el-tree-node__expand-icon){
				display:none;
			}
			.filter-tree-node{
				width:100%;
				display:flex;
				align-items: center;
			}
			.filter-tree-node-icon{
				margin-right:5px;
			}
		}
		.filter-tree-dropdown{
			position: absolute;
			top: 0%;
			left: 0%;
			max-height: 150px;
			border-radius: 4px;
			border: 1px solid #e4e7ed;
			background-color: #f8f8f8;
			box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
			overflow: auto;
			font-size:12px;
			z-index: 9999;
			.filter-tree-dropdown-item{
				padding: 2px 5px;
				&:hover{
					background-color: #bdbcbc;
				}
			}
		}
	}
</style>
