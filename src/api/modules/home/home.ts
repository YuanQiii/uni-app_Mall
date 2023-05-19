import { request } from '@/utils/request'
import type { Response } from '@/utils/request'

export function getHome() {
  return request<Response<API.UserInfoResult>>({
    url: 'homeApi',
    method: 'get'
  })
}
