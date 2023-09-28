<template>
  <div class="home-top">
    <div class="item" v-for="item in itemList" :key="item">
      <div class="item-box">
        <div class="img">
          <img :src="item.img" />
        </div>
        <div class="text">
          <div class="title-box">
            <span class="title">{{ item.title }}</span>
            <span class="subtitle">
              较昨日
              <img v-if="item.subtitle < 0" src="/src/assets/img/down.png" />
              <img v-else src="/src/assets/img/up.png" />
              <span
                :style="{
                  color: item.subtitle < 0 ? '#3eb21f' : '#f7961e',
                }"
              >
                {{ item.subtitle }} %
              </span>
            </span>
          </div>
          <div class="content">
            <span class="left">{{ item.content }}</span>
            <span class="right">&nbsp;/ S</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-chart">
    <div id="container1" style="overflow: auto; height: 100%"></div>
  </div>
  <div class="home-bolb">
    <div id="container2" style="overflow: auto; height: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
import { useChartStore } from "../../stores/chart"
import { option1, option2, itemList } from "./composables/options"
const useChart = useChartStore()
onMounted(() => {
  useChart.init({ container1: option1, container2: option2 })
})
onUnmounted(() => {
  useChart.destroy(["container1", "container2"])
})

const textfnc = () => {
  let a = 0
  a++
  return a
}
textfnc()
</script>

<style lang="scss" scoped>
.home-top {
  display: flex;
  justify-content: space-between;

  .item {
    background-color: var(--z-admin-layout-table-bg);
    padding: 10px;
    border-radius: 6px;
    box-shadow: var(--z-admin-layout-shadow);

    .item-box {
      display: flex;
      height: 150px;

      .img {
        display: flex;
        align-items: center;
        margin: 0 30px;

        img {
          height: 88px;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .title-box {
          display: flex;
          margin-top: 15px;

          .title {
            color: var(--z-admin-layout-sidebar-color);
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.45px;
            text-align: left;
          }

          .subtitle {
            display: flex;
            align-items: center;
            margin-left: 20px;
            color: #777;
            font-size: 14px;
            letter-spacing: 0.4px;
            text-align: left;

            img {
              height: 12px;
            }
          }
        }

        .content {
          .left {
            width: 99px;
            height: 36px;
            margin-bottom: 20px;
            color: var(--z-admin-layout-sidebar-color);
            font-weight: 700;
            font-size: 48px;
            letter-spacing: 1.2px;
            text-align: left;
          }

          .right {
            width: 8px;
            height: 14px;
            color: #777;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.4px;
            text-align: left;
          }
        }
      }
    }
  }

  .item:hover {
    box-shadow: 0 3px 10px #00000026;
  }
}

.home-chart,
.home-bolb {
  margin-top: 20px;
  box-shadow: var(--z-admin-layout-shadow);
  height: 300px;
  width: calc(100%);
  background-color: var(--z-admin-layout-table-bg);
  border-radius: 6px;
}
</style>
