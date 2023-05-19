<template>
  <view class="mt-20rpx flex items-center">
    <text class="ml-20rpx mr-20rpx text-40rpx"> 限时抢购 </text>
    <u-count-down
      :timestamp="30 * 60 * 1000"
      format="HH:mm:ss"
      autoStart
      @change="onChange"
    >
      <view class="time">
        <text class="time__item bg-red-500">{{
          data.timeData.hours > 10
            ? data.timeData.hours
            : '0' + data.timeData.hours
        }}</text
        >:<text class="time__item bg-red-500">{{ data.timeData.minutes }}</text
        >:<text class="time__item bg-red-500">{{ data.timeData.seconds }}</text>
      </view>
    </u-count-down>
  </view>
  <view class="p-20rpx mt-20rpx">
    <z-swiper
      v-model="props.flashSaleProductList"
      :options="{ slidesPerView: 4 }"
    >
      <z-swiper-item
        v-for="(item, index) in props.flashSaleProductList"
        :key="index"
      >
        <view>
          <u-image
            width="100%"
            height="120rpx"
            :src="item.small_image"
            mode="aspectFit"
          ></u-image>
          <view>
            {{ item.name }}
          </view>
          <view>
            {{ item.origin_price }}
          </view>
          <view>
            {{ item.price }}
          </view>
        </view>
      </z-swiper-item>
    </z-swiper>
  </view>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from 'vue'

const props = defineProps({
  flashSaleProductList: []
})

console.log('flashSaleProductList', props.flashSaleProductList)

const data = reactive({
  timeData: {}
})

const list = reactive([
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
  'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
])

const onChange = (e) => {
  data.timeData = e
}
</script>
