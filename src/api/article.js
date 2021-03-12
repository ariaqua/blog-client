import request from '@/util/request';

export function getList() {
  return request({
    url: 'article',
    method: 'get'
  })
}
