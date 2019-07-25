import { observable, action } from 'mobx'
import { getHome } from '../../services/home'
export default class Home {
    //@observable 修饰符
    @observable homeData = null;
    //@action 修饰方法
    @action getHomeData = async () => {
        const data=await getHome()
        console.log(data)
        this.homeData = data.data
        return this.homeData
    }
}
