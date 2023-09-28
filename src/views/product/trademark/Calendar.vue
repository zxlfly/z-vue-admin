<template>
    <div ref="tuiCalendar" class="calendar-wrapper"></div>
</template>
<script setup>
import Calendar from 'tui-calendar-hi';
import { ref, onMounted, reactive, nextTick, defineProps, defineExpose, defineEmits, computed, watch } from 'vue'

const emit = defineEmits(['beforeClickSchedule'])
const tuiCalendar = ref()
const state = reactive({
    calendarInstance: null,
    schedules: [],
    // taskData:null
})
const props = defineProps({
    calendars: {
        type: Array,
        default() {
            return [];
        }
    },
    schedules: {
        type: Array,
        default() {
            return [];
        },
        validator(value) {
            let notHave = false;

            value.forEach(schedule => {
                notHave = ['start', 'category'].some(prop => !schedule.hasOwnProperty(prop));
            });

            return !notHave;
        }
    },
    view: {
        type: String,
        default: 'week'
    },
    taskView: {
        type: [Boolean, Array],
        default: true
    },
    scheduleView: {
        type: [Boolean, Array],
        default: true
    },
    theme: {
        type: Object,
        default() {
            return {};
        }
    },
    template: {
        type: Object,
        default() {
            return {};
        }
    },
    week: {
        type: Object,
        default() {
            return {};
        }
    },
    month: {
        type: Object,
        default() {
            return {};
        }
    },
    useCreationPopup: {
        type: Boolean,
        default: true
    },
    useDetailPopup: {
        type: Boolean,
        default: true
    },
    timezones: {
        type: Array,
        default() {
            return [];
        }
    },
    disableDblClick: {
        type: Boolean,
        default: false
    },
    disableClick: {
        type: Boolean,
        default: false
    },
    isReadOnly: {
        type: Boolean,
        default: false
    },
    usageStatistics: {
        type: Boolean,
        default: true
    }
})
watch(() => props.schedules, (newV, old) => {
    if (newV.length > 0) {
        state.schedules = newV
        resetRender()
    }
})

onMounted(() => {
    state.calendarInstance = new Calendar(tuiCalendar.value, {
        defaultView: props.view,
        taskView: props.taskView,
        scheduleView: props.scheduleView,
        theme: props.theme,
        template: props.template,
        week: props.week,
        month: props.month,
        calendars: props.calendars,
        useCreationPopup: props.useCreationPopup,
        useDetailPopup: props.useDetailPopup,
        timezones: props.timezones,
        disableDblClick: props.disableDblClick,
        disableClick: props.disableClick,
        isReadOnly: props.isReadOnly,
        usageStatistics: props.usageStatistics
    });
    addEventListeners();
    reflectSchedules();
})

const addEventListeners = () => {
    state.calendarInstance.on('beforeClickSchedule', (...args) => emit('beforeClickSchedule', ...args));
    state.calendarInstance.on('beforeCreateSchedule', (...args) => emit('beforeCreateSchedule', ...args));
    state.calendarInstance.on('beforeUpdateSchedule', (...args) => emit('beforeUpdateSchedule', ...args));
}
const reflectSchedules = () => {
    if (state.schedules.length > 0) {
        invoke('createSchedules', state.schedules);
    }
}
const invoke = (methodName, ...args) => {
    let result;
    if (state.calendarInstance[methodName]) {
        result = state.calendarInstance[methodName](...args);
    }
    return result;
}
const getRootElement = () => {
    return tuiCalendar.value;
}
const getInstance = () => {
    return state.calendarInstance;
}
const resetRender = () => {
    state.calendarInstance.clear();
    reflectSchedules();
}

defineExpose({ getRootElement, getInstance, resetRender })
</script>

<style scoped>
:deep(.tui-full-calendar-popup-delete) {
    display: none;
}
</style>