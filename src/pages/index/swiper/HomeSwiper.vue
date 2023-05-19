<template>
  <view>
    <u-swiper :list="props.swiperList"></u-swiper>
  </view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  swiperList: []
})
</script>
