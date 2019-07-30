import { observable, action } from 'mobx'
import { getCatelog, getGoodsCount } from '../../services/catelog'

export default class Catelog {
    @observable catelogData = null;
    @observable goodsCount=null;
    @action getCatelog = async (params) => {
        const data = await getCatelog(params)
        this.catelogData = data.data.currentCategory;
    }
    @action getCount = async () => {
        const data = await getGoodsCount()
        this.goodsCount=data.data.goodsCount
    }

}