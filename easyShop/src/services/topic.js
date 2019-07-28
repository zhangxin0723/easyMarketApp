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
export function getCommentList(params) {
    console.log(params)
    return request.get('/comment/list/',{params})
}
//对某个商品或专题ID进行评论
export function getComment(params) {
    console.log(params)
    return request.post('/comment/post',params)
}