import request from '../utils/request'
//请求登录接口
export function login(params) {
    return request.post('/auth/loginByMobile',params)
}