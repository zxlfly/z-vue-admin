<template>
	<div class="calendar-home">
		<div class="ButtonGroup">
			<div class="title">
				<div style="margin-right: 15px;">{{ state.rangeText }}</div>
				<el-button-group>
					<el-button title="上月" text size="small" :icon="ArrowLeftBold" @click="setSwitch('prev')" />
					<el-button title="下月" text size="small" :icon="ArrowRightBold" @click="setSwitch('next')" />
				</el-button-group>
				<el-button size="small" @click="setSwitch('today')">今天</el-button>
			</div>
			<el-button-group>
				<el-button :type="state.calendarView === 'day' ? 'success' : 'default'"
					@click="setView('day')">日</el-button>
				<el-button :type="state.calendarView === 'week' ? 'success' : 'default'"
					@click="setView('week')">周</el-button>
				<el-button :type="state.calendarView === 'month' ? 'success' : 'default'"
					@click="setView('month')">月</el-button>
			</el-button-group>
		</div>
		<div class="calendar-wrapper">
			<Calendar ref="cal" :view="state.calendarView" :week="state.calendarWeek" :month="state.calendarMonth"
				:theme="state.calendarTheme" :template="state.calendarTemplate" :schedules="list()" :taskView="false"
				:useCreationPopup="false" @beforeCreateSchedule="onBeforeCreateSchedule"
				@beforeClickSchedule="onBeforeClickSchedule" @beforeUpdateSchedule="onBeforeUpdateSchedule" disable-click />
		</div>
	</div>
</template>

<script lang="ts" setup>
import 'tui-calendar-hi/dist/tui-calendar-hi.css'
import dayjs from 'dayjs';
import Calendar from './Calendar.vue'

const cal = ref()
const router = useRouter()
const state = reactive({
	taskData: [],
	calendarInstance: null,
	calendarView: 'month',
	calendarWeek: { daynames: ['日', '一', '二', '三', '四', '五', '六'] },
	calendarMonth: { daynames: ['日', '一', '二', '三', '四', '五', '六'] },
	calendarTheme: {
		'common.border': '1px solid #f4f5f5',
		'month.dayname.fontSize': '14px',
		'month.dayname.borderLeft': '1px solid #f4f5f5',
		'month.dayname.height': '50px',
	},
	calendarTemplate: {
		titlePlaceholder: () => {
			return '任务描述'
		},
		popupSave: () => {
			return '保存'
		},
		popupEdit: () => {
			return '详情'
		},
		popupDelete: () => {
			return '删除'
		}
	},
	rangeText: null
})
let param = reactive({
	findType: 0,
	pageNum: 1,
	pageSize: 10,
	agencyTaskName: '',
	status: '',
	expectedCompletionTime: '',
	expectedStartTime: ''
})

onMounted(async () => {
	state.calendarInstance = cal.value?.getInstance()
	setRenderRange()
	// let res = await templateApi.findTaskList(param)
	// if (res.success) {
	// 	state.taskData = res.queryResult.list
	// }
	cal.value?.resetRender();
})
// schedules数据
const list = () => {
	let data = []
	state.taskData.forEach(item => {
		let color, title, bgColor
		if (item.status) {
			color = item.status === 'ASSIGNED' ? '#909399' : item.status == 'CLAIMED' ? '#E6A23C' : item.status == 'IN_PROCESS' ? '#409EFF' : ''
			bgColor = item.status === 'ASSIGNED' ? '#DEE0E4' : item.status == 'CLAIMED' ? '#EAE1D5' : item.status == 'IN_PROCESS' ? '#E3EAFD' : ''
			title = item.status === 'ASSIGNED' ? '待认领' : item.status == 'CLAIMED' ? '已认领' : item.status == 'IN_PROCESS' ? '进行中' : ''
		}
		let task = {
			id: item.id,
			calendarId: `${item.id}`,
			title: item.name,
			// body:'描述.......',
			category: 'time',
			start: new Date(item.expectedStartTime).toISOString(),
			end: new Date(item.expectedCompletionTime).toISOString(),
			color: color ? color : "#515a6e",
			bgColor: bgColor ? bgColor : '#E3EAFD',
			borderColor: 'E3EAFD',
			priority: '',
			complete_at: item.actualCompletionTime,//完成时间
			start_at: '',
			end_at: '',
			_time: '',
			isAllDay: false,
			preventClick: true,
			preventCheckHide: true,
			isChecked: false,
		}
		if (item.status) {
			let priorityStyle = `background-color:${color};color:#fff;border:1px solid ${color};padding:3px 3px;border-radius: 5px;`;
			task.priority = `<span class="overdue" style="${priorityStyle}">${title}</span>`;
		}
		data.push(task)
	})
	return data
}
// 切换显示日/周/月
const setView = (view) => {
	state.calendarView = view
	state.calendarInstance.changeView(view, true);
	setRenderRange()
}
//短期月份切换
const setSwitch = (type) => {
	if (type === 'prev') {
		state.calendarInstance.prev();
	} else if (type === 'next') {
		state.calendarInstance.next()
	} else {
		state.calendarInstance.today()
	}
	setRenderRange()
}
// 获取时间
const setRenderRange = () => {
	nextTick(() => {
		let options = state.calendarInstance.getOptions();
		let viewName = state.calendarInstance.getViewName();
		let html = [];
		if (viewName === 'day') {
			html.push(currentCalendarDate('YYYY.MM.DD'));
		} else if (viewName === 'month' &&
			(!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
			html.push(currentCalendarDate('YYYY.MM'));
		} else {
			html.push(dayjs(state.calendarInstance.getDateRangeStart().getTime()).format('YYYY.MM.DD'));
			html.push(' ~ ');
			html.push(dayjs(state.calendarInstance.getDateRangeEnd().getTime()).format(' MM.DD'));
		}
		state.rangeText = html.join('')
	})
}
const currentCalendarDate = (format) => {
	let Y = state.calendarInstance.getDate().getFullYear()
	let M = state.calendarInstance.getDate().getMonth() + 1
	let D = state.calendarInstance.getDate().getDate()
	M = M < 10 ? '0' + M : M
	if (format === 'YYYY.MM.DD') {
		return Y + '.' + M + '.' + D
	} else {
		return Y + '.' + M
	}
}
const onBeforeCreateSchedule = (obj) => {
	console.log(obj);
}
// 点击详情
const onBeforeClickSchedule = (obj) => {
	if (obj.type === 'edit') {
		router.push({
			path: '/process/taskManagement/taskInfo',
			query: {
				id: obj.schedule.id
			}
		})
	}
}
const onBeforeUpdateSchedule = (obj) => {
	console.log(obj);
}
</script>

<style lang="scss" scoped>
.calendar-home {
	background: #fff;
	height: 100%;
	border-radius: 6px;
	box-shadow: var(--z-admin-layout-shadow);
	padding: 0 20px;
	.calendar-wrapper {
		width: 100%;
		height: 90%;
		// overflow: auto;
	}

	.ButtonGroup {
		height: 10%;
		padding: 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-size: 25px;
		font-weight: 700;
		display: flex;
		align-items: center;

	}
}
</style>