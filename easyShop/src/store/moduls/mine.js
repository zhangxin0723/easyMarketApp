import { observable, action } from 'mobx'
import { getCollect, getAddress } from '../../services/mine'

export default class Mine {
    @observable collectData = null;
    @observable addressData = null;
    //获取收藏
    @action getCollect = async (params) => {
        const data = await getCollect(params)
        this.collectData = data.data
        console.log(data)
    }
    //获取用户地址数据
    @action getAddress = async () => {
        const data = await getAddress()
        this.addressData = data.data
        console.log(data)
    }
}