import request from '@/util/request';

export function getList(skip = 0, take = 10) {
  return request({
    url: `article?skip=${skip}&take=${take}`,
    method: 'get',
  })
}

export function getDetail(id) {
  return request({
    url: `article/${id}`,
    method: 'get'
  })
}

