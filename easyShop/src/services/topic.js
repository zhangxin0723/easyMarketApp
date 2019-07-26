import request from '../utils/request'
//获取专题数据
export function getTopic() {
    return request.get('/topic/list')
}
//根据专题Id获取专题详情
export function getTopicDetail(params) {
    console.log(params,'params...')
    return request.get(`/topic/detail/?id=${params}`)
}