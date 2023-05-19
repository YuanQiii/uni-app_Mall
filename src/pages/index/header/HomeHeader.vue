<template>
  <u-image
    :style="{
      position: 'absolute'
    }"
    width="100%"
    height="500rpx"
    src="../../../static/images/home/backImage.png"
  ></u-image>
  <view class="flex flex-col">
    <u-icon
      :style="{
        zIndex: 10
      }"
      :label="position"
      color="#fff"
      label-color="#fff"
      size="40"
      name="map-fill"
    ></u-icon>
    <u-search
      :style="{
        zIndex: 10
      }"
      bg-color="#fff"
      :placeholder="placeholder"
      v-model="keyword"
      :animation="true"
    ></u-search>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const position = ref('position')
const placeholder = ref('placeholder')
const keyword = ref('')
</script>

<style lang="less" scoped>
::v-deep .u-action {
  color: #fff;
}
</style>
