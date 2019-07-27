import request from '../utils/request'
//获取专题数据
export function getTopic() {
    return request.get('/topic/list')
}
//根据专题Id获取专题详情
export function getTopicDetail(params) {
    return request.get(`/topic/detail/?id=${params}`)
}
//根据专题ID或者商品ID获取评论获取相关专题
export function getCommentList(valueId,typeId) {
    return request.get(`/comment/list/?valueId=${valueId}&typeId=${typeId}&page=${1}&size=${5}`)
}