import request from '../utils/request'
//获取商品查询的相关信息
export function getSearch() {
    return request.get('/search/index')
}
//删除商品查询的历史记录
export function delSearch() {
    return request.get('/search/clearhistory')
}
//商品查询模糊查询关键字
export function searchFuzzy(params) {
    return request.get('/api/goods/list', { params })
}