import request from '../utils/request'
//获取购物车详情
export function getGoodsDetail(params) {
    return request.get('/goods/detail', { params })
}
//相关商品
export function getGoodsRelated(params) {
    return request.get('/goods/related', { params })
}
//添加到购物车
export function addGoodsCart(params) {
    return request.post('/cart/add',  params )
}
//获取用户购物车数据
export function getAddGoodsCart() {
    return request.get('/cart/index')
}
//购物车商品是否选中
export function getCartChecked(params) {
    return request.post('/cart/checked',params)
}
//是否添加到收藏栏
export function addCollect(params) {
    return request.post('/collect/addordelete',params)
}
//获取用户购物车商品数量
export function getCartSum() {
    return request.get('/cart/goodscount')
}
//更新购物车
export function CartUpdate(params) {
    return request.post('/api/cart/update',params)
}
//删除
export function CartDelete(params) {
    return request.post('/api/cart/delete',params)
}