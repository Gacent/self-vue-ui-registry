import request from './index'

export function getInfo () {
  return request({
    url: '/topics',
    methods: 'get'
  })
}
