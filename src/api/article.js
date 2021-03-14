import request from '@/util/request';

export function getList() {
  return request({
    url: 'article',
    method: 'get'
  })
}

export function getDetail(id) {
  return request({
    url: `article/${id}`,
    method: 'get'
  })
}

