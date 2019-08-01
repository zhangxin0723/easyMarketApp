import { observable, action } from 'mobx'
import { getCollect, getAddress, addAddress, delAddress, delCollect } from '../../services/mine'

export default class Mine {
    @observable collectData = null;
    @observable addressData = null;
    //获取收藏
    @action getCollect = async (params) => {
        const data = await getCollect(params)
        this.collectData = data.data
    }
    //获取用户地址数据
    @action getAddress = async () => {
        const data = await getAddress()
        this.addressData = data.data
        console.log(data)
    }
    //增加地址
    @action addAddress = async () => {
         const data=await addAddress()
        this.getAddress()
    }
    //删除地址
    @action delAddress = async (params) => {
        await delAddress(params)
        this.getAddress()
        this.getCollect({typeId:0})
    }
    @action delCollect = async (params) => {
        await delCollect(params)
        this.getCollect({ typeId: 1 })
    }
}