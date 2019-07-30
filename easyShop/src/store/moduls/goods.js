import { observable, action } from 'mobx'
import { getGoodsDetail, getGoodsRelated , addGoodsCart , getAddGoodsCart} from '../../services/goods'

export default class Goods {
    @observable goodsData = null;
    @observable relatedData = null;
    //添加购物车
    @observable addCart = []
    //获取用户购物车数据
    @observable information= []
    @action getGoods = async (params) => {
        const data = await getGoodsDetail(params)
        this.goodsData = data.data
        console.log(data)
    }
    @action getRelated = async (params) => {
        const data = await getGoodsRelated(params)
        this.relatedData = data.data.goodsList
    }
    //添加到购物车
    @action addGoodsCart = async (params) => {
        console.log(params)
        const data = await addGoodsCart(params)
        this.addCart = data.data
        console.log(data)
    }
     //获取用户购物车数据
     @action getAddGoodsCart = async () => {
        const data = await getAddGoodsCart()
        this.information = data.data.cartList
        console.log(data)
    }
}