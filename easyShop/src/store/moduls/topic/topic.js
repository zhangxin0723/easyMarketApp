import { observable , action } from 'mobx'
import {getTopic , getTopicDetail , getCommentList , getComment} from '../../../services/topic'

export default class Topic {
    //@observable 修饰符
     @observable mytopic = [] //专题数据
     @observable mytopicDetail = [] //专题详情数据
     @observable mytopicComment = [] //根据商品id 或 专题id 获取评论
     @observable myComment = [] //对某个商品或专题ID进行评论
    //@action 修饰方法
    @action getTopicData = async () => { //专题数据
        const data = await getTopic()
        this.mytopic = data.data
    }
    @action getTopicDetail = async (id) => { //专题详情数据
        const data = await getTopicDetail(id)
        this.mytopicDetail = data.data
    }
    @action getCommentList = async (obj) => {  //根据商品id 或 专题id 获取评论
        const data = await getCommentList(obj)
        this.mytopicComment = data.data
        console.log(data)
    }
    @action getComment = async (obj) => {  //对某个商品或专题ID进行评论
        console.log(obj)
        const data = await getComment()
        this.mytopicComment = data.data
        console.log(data)
    }
}