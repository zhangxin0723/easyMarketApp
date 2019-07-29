import request from '../utils/request'
//根据分类 ID 获取当前分类信息和子分类
export function getCatelog(params) {
    return request.get('/catalog/current', { params })
}