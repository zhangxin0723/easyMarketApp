import { observable, action } from 'mobx'
import { getHome, getCatelog, getNavData, getBrand } from '../../services/home'
export default class Home {
    //@observable 修饰符
    @observable homeData = null;
    @observable catalog = null;
    @observable navData = null;
    //@action 修饰方法
    @action getHomeData = async () => {
        const data = await getHome()
        this.homeData = data.data
    }
    //根据分类 Id 或者制造商 Id 获取商品
    @action getCatelog = async (params) => {
        const data = await getCatelog(params)
        this.catalog = data.data
    }
    //获取分类 ID 分类 Nav 数据
    @action getNav = async (params) => {
        const data = await getNavData(params)
        this.navData = data.data;
    }
    //根据制造商 ID 获取制造商详情
    @action getBrandDetail = async (params) => {
        const data = await getBrand(params)
        console.log(data)
    }
}
