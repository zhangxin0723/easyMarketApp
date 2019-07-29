import { observable, action } from 'mobx'
import { getCatelog } from '../../services/catelog'

export default class Catelog {
    @observable catelogData = null;
    @action getCatelog = async (params) => {
        const data = await getCatelog(params)
        this.catelogData = data.data.currentCategory;
        console.log(data.data.currentCategory)
    }

}