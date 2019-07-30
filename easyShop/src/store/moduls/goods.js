import { observable, action } from 'mobx'
import { getGoodsDetail, getGoodsRelated , addGoodsCart , getAddGoodsCart , getCartChecked , addCollect ,getCartSum} from '../../services/goods'

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
    @action getGoods = async (params) => {
        const data = await getGoodsDetail(params)
        this.goodsData = data.data
        console.log(data,'11111')
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
        this.getCartSum()
        console.log(data)
    }
     //获取用户购物车数据
     @action getAddGoodsCart = async () => {
        const data = await getAddGoodsCart()
        this.information = data.data.cartList
        console.log(data)
    }
     //购物车商品是否选中
     @action getCartChecked = async (params) => {
        const data = await getCartChecked(params)
        this.cartChecked = data.data.cartList
        console.log(data)
    }
    //是否添加到收藏栏
    @action addCollect = async (params) => {
        console.log(params)
        const data = await addCollect(params)
        this.isCollect = data.data
        console.log(data)
    }
    //获取用户购物车商品数量
    @action getCartSum = async () => {
        const data = await getCartSum()
        this.Sum = data.data.cartTotal
        console.log(data)
    }
}