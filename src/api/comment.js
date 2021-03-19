import request from '@/util/request';

export function getComments(id) {
  return request({
    url: `comment/${id}`,
    method: 'get'
  })
}

export function createComment(data) {
  return request({
    url: 'comment',
    method: 'post',
    data
  })
}

export function getAvatar() {
  return request({
    url: 'album/avatar',
  })
}

export function validateAvatar(avatar) {
  return request({
    url: `album/validateAvatar?url=${avatar}`,
  })
}

