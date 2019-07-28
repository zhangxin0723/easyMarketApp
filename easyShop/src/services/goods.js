import request from '../utils/request'
//获取购物车详情
export function getGoodsDetail(params) {
    return request.get('/goods/detail', { params })
}