import { observable , action } from 'mobx'
import {getTopic , getTopicDetail , getCommentList} from '../../../services/topic'

export default class Topic {
    //@observable 修饰符
     @observable mytopic = [] //专题数据
     @observable mytopicDetail = [] //专题详情数据
     @observable mytopicComment = [] //根据商品id 或 专题id 获取评论
    //@action 修饰方法
    @action getTopicData = async () => { //专题数据
        const data = await getTopic()
        this.mytopic = data.data
    }
    @action getTopicDetail = async (id) => { //专题详情数据
        const data = await getTopicDetail(id)
        this.mytopicDetail = data.data
    }
    @action getCommentList = async (valueId,typeId) => {  //根据商品id 或 专题id 获取评论
        const data = await getCommentList(valueId,typeId)
        this.mytopicComment = data.data
        console.log(data)
    }
}