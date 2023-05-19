import { defineStore } from 'pinia'
import { Storage } from '@/utils/Storage'

interface UserState {
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: Storage.get(ACCESS_TOKEN_KEY, null)
  })
})
