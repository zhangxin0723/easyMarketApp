import { observable, action } from 'mobx'
import { getGoodsDetail, getGoodsRelated } from '../../services/goods'

export default class Goods {
    @observable goodsData = null;
    @observable relatedData = null;
    @action getGoods = async (params) => {
        const data = await getGoodsDetail(params)
        this.goodsData = data.data
        console.log(data)
    }
    @action getRelated = async (params) => {
        const data = await getGoodsRelated(params)
        this.relatedData = data.data.goodsList
    }
}