import { observable, action } from 'mobx'
import { getGoodsDetail, getGoodsRelated , addGoodsCart , getAddGoodsCart , getCartChecked , addCollect ,getCartSum , CartUpdate , CartDelete} from '../../services/goods'
import {getCollect} from '../../services/mine'
export default class Goods {
    @observable goodsData = null;
    @observable relatedData = null;
    //添加购物车
    @observable addCart = []
    //获取用户购物车数据
    @observable information = []
    //购物车商品是否选中
    @observable cartChecked = []
    //是否添加到收藏栏
    @observable isCollect = []
    //获取用户购物车商品数量
    @observable Sum = []
    //全选
    @observable CheckedToAll = true
    //单选
    @observable Radio = true
    //减少
    @observable decrease = 0
    //获取收藏
    @observable collectData = null;
   
    @action getGoods = async (params) => {
        const data = await getGoodsDetail(params)
        this.goodsData = data.data
    }
    @action getRelated = async (params) => {
        const data = await getGoodsRelated(params)
        this.relatedData = data.data.goodsList
    }
    //添加到购物车
    @action addGoodsCart = async (params) => {
        const data = await addGoodsCart(params)
        this.addCart = data.data
        this.getCartSum()
    }
     //获取用户购物车数据
     @action getAddGoodsCart = async () => {
        const data = await getAddGoodsCart()
        this.information = data.data.cartList
        this.cartChecked = data.data.cartTotal
        this.CheckedToAll = this.information.every(item => item.checked === 1 )
    }
     //购物车商品是否选中
     @action getCartChecked = async (params,checkall) => {
        const data = await getCartChecked(params)
        this.cartChecked = data.data.cartTotal
        if(checkall) {
            //全选
            this.CheckedToAll = !this.CheckedToAll
            this.getAddGoodsCart()
            return 
        }
        //单选
        this.CheckedToAll = this.information.every(item => item.checked === 1)
        this.getAddGoodsCart()
    }
    //是否添加到收藏栏
    @action addCollect = async (params,valueId) => {
        const data = await addCollect(params)
        this.isCollect = data.data
        console.log(data,'data...')
        console.log(valueId)
        this.getGoods({id:valueId})
        this.getCollect({typeId:1})
    }
    //获取用户购物车商品数量
    @action getCartSum = async () => {
        const data = await getCartSum()
        this.Sum = data.data.cartTotal
    }
    //更新购物车
    @action CartUpdate = async (params) => {
        await CartUpdate(params)
        this.getAddGoodsCart()
    }
    //删除购物车
    @action CartDelete = async (params) => {
        await CartDelete(params)
        this.getAddGoodsCart()
    }
    //获取收藏
    @action getCollect = async (params) => {
        const data = await getCollect(params)
        this.collectData = data.data
    }
}