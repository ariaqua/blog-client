import request from '@/util/request';

export function getList(skip = 0, take = 10) {
  console.log(skip, take)
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

