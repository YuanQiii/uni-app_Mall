interface SwiperItem {
  background_image: string
  cid: number
  icon_url: string
  is_pop_login: number
  link: string
  meteria_id: string
  public_id: string
  public_name: string
}

interface SwiperResult {
  icon_list: SwiperItem[]
  show_dark: boolean
  type: number
}

interface AdTextResult {
  cid: number
  height: number
  image_url: string
  is_pop_login: number
  link: string
  public_id: string
  public_name: string
  show_dark: boolean
  type: number
  width: number
}

interface CategoryItem {
  icon_url: string
  name: string
}

interface CategoryResult {
  background_image: string
  icon_list: CategoryItem[]
  show_dark: boolean
  type: number
}

interface Product {
  id: string
  product_name: string
  name: string
  origin_price: string
  price: string
  vip_price: string
  spec: string
  small_image: string
  category_id: string
  sizes: any[]
  total_sales: number
  month_sales: number
  buy_limit: number
  mark_discount: number
  mark_new: number
  mark_self: number
  status: number
  category_path: string
  type: number
  stockout_reserved: boolean
  is_promotion: number
  sale_point_msg: string[][]
  activity: any[]
  is_presale: number
  presale_delivery_date_display: string
  is_gift: number
  is_onion: number
  is_invoice: number
  sub_list: any[]
  badge_img: string
  is_vod: boolean
  stock_number: number
  today_stockout: string
  is_booking: number
}

interface flashSaleProductItem {}

interface flashSaleProductResult {
  type: number
  show_dark: boolean
  is_more: boolean
  link: {
    type: number
    data: {
      id: string
      title: string
    }
  }
  status: number
  promotion_id: string
  sub_title: string
  start_time: number
  end_time: number
}

declare namespace API {
  type UserInfoResult = {
    notice: {}
    home_ad: {
      image_url: string
    }
    special_zone: {}
    list: [SwiperResult, AdTextResult, CategoryResult]
  }
}
