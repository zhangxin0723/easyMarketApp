import request from '../utils/request'
//获取收藏
export function getCollect(params) {
    return request.get('/collect/list',{params})
}
//获取用户地址数据
export function getAddress(){
    return request.get('/address/list')
}