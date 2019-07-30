import request from '../utils/request'
//获取收藏
export function getCollect(params) {
    return request.get('/collect/list',{params})
}