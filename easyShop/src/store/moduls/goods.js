import { observable, action } from 'mobx'
import {getGoodsDetail} from '../../services/goods'

export default class Goods {
    @observable goodsData=null;
    @action getGoods =async (params)=>{
        const data =await getGoodsDetail(params)
        this.goodsData=data.data
        console.log(data.data)
    }
}