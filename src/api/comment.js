import request from '@/util/request';

export function getComments(id) {
  return request({
    url: `comment/${id}`,
    method: 'get'
  })
}

export function createComment(data) {
  console.log(data)
  return request({
    url: 'comment',
    method: 'post',
    data
  })
}
