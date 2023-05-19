<template>
  <view v-for="(item, index) in props.productList" :key="index">
    <ProductItem :product="item" />
  </view>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import ProductItem from '@/components/product/ProductItem.vue'

const props = defineProps({
  productList: []
})
</script>
