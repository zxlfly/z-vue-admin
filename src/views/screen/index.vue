<template>
    <div id="contaior_screen" style="height: 100%"></div>
</template>

<script setup lang="ts">
import { useChartStore } from "../../stores/chart"
import { option1 } from "../home/composables/options"
const useChart = useChartStore()
onMounted(() => {
    useChart.init({
        contaior_screen: option1,
    })
})
onUnmounted(() => {
    useChart.destroy("contaior_screen")
})
</script>

<style></style>
