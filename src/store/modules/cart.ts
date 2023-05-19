import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartList: []
  }),
  getters: {
    totalPrice: (state) => {
      let total = 0
      state.cartList.forEach((element) => {
        if (element.checked) {
          total += element.price * element.cart_num * 100
        }
      })
      return total
    }
  },
  actions: {
    addToCart: (payload) => {
      console.log(payload)
    }
  }
})
