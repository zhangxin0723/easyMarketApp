import { observable , action } from 'mobx'
import {getTopic , getTopicDetail} from '../../../services/topic'

export default class Topic {
    //@observable 修饰符
     @observable mytopic = [] //专题数据
     @observable mytopicDetail = [] //专题详情数据
    //@action 修饰方法
    @action getTopicData = async () => { //专题数据
        const data = await getTopic()
        this.mytopic = data.data
    }
    @action getTopicDetail = async (id) => { //专题详情数据
        console.log(id,'14....')
        const data = await getTopicDetail(id)
        this.mytopicDetail = data.data
    }
}