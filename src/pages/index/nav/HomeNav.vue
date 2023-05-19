<template>
  <view>
    <u-grid :col="5" :border="false">
      <u-grid-item v-for="(item, index) in props.dataNav" :key="index">
        <u-image
          width="100%"
          height="50rpx"
          :src="item.icon_url"
          mode="aspectFit"
        ></u-image>
        <view class="grid-text mt-10rpx">{{ item.name }}</view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  dataNav: []
})

console.log('props', props)
</script>
