import { observable, action } from 'mobx'
import { getHome,getCatelog } from '../../services/home'
export default class Home {
    //@observable 修饰符
    @observable homeData = null;
    @observable catalog = null;
    //@action 修饰方法
    @action getHomeData = async () => {
        const data=await getHome()
        this.homeData = data.data
    }
    //根据分类 Id 或者制造商 Id 获取商品
    @action getCatelog=async (params)=>{
        const data = await getCatelog(params)
        console.log(data.data)
        this.catalog=data.data
    }
}
