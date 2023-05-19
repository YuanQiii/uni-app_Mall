<template>
  <view>
    <!-- <HomeHeader />
    <HomeSwiper :swiperList="data.swiperList" />
    <HomeTip />
    <HomeNav :dataNav="data.navList" />
    <HomeVip />
    <HomeFlash :flashSaleProductList="data.flashSaleProductList" />
    <HomeProduct :product-list="data.productList" /> -->
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import HomeHeader from './header/HomeHeader.vue'
import HomeSwiper from './swiper/HomeSwiper.vue'
import HomeTip from './tip/HomeTip.vue'
import HomeNav from './nav/HomeNav.vue'
import HomeVip from './vip/HomeVip.vue'
import HomeFlash from './flash/HomeFlash.vue'
import HomeProduct from './product/HomeProduct.vue'

import { getHome } from '@/api/modules/home/home'

const data = reactive({
  swiperList: [],
  navList: [],
  flashSaleProductList: [],
  productList: []
})

// 转换轮播图的格式
const convertSwiperList = (list) => {
  return list.map((element) => {
    return {
      image: element.icon_url,
      name: element.public_name
    }
  })
}

getHome().then((res) => {
  console.log('res', res)

  data.swiperList = convertSwiperList(res.list[0].icon_list)
  data.navList = res.list[2].icon_list
  data.flashSaleProductList = res.list[3].product_list
  data.productList = res.list[12].product_list
})
</script>

<style scoped></style>
