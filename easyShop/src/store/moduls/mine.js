import { observable, action } from 'mobx'
import { getCollect,  } from '../../services/mine'

export default class Mine {
    @observable collectData = null;
    //获取收藏
    @action getCollect = async (params) => {
        const data = await getCollect(params)
        this.collectData = data.data
        console.log(data)
    }
}