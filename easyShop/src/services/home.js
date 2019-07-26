import request from '../utils/request'
//请求登录接口
export function getHome() {
    return request.get('/')
}
//根据分类 Id 或者制造商 Id 获取商品
export function getCatelog(params){
    return request.get('/goods/list',{params})
}