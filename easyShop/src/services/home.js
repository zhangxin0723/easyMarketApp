import request from '../utils/request'
//请求登录接口
export function getHome() {
    return request.get('http://123.206.55.50:8888/')
}