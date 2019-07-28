import request from '../utils/request'
//获取购物车详情
export function getGoodsDetail(params) {
    return request.get('/goods/detail', { params })
}
//相关商品
export function getGoodsRelated(params) {
    return request.get('/goods/related', { params })
}