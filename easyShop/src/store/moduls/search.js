import { observable, action } from 'mobx'
import { getSearch, delSearch, searchFuzzy } from '../../services/search'

export default class Search {
    @observable searchData = null;
    @observable filterData = null;
    //获取商品查询的相关信息
    @action getSearch = async () => {
        const data = await getSearch()
        this.searchData = data.data
    }
    //删除商品查询的历史记录
    @action delSearch = async () => {
         await delSearch();
    }
    //商品查询模糊查询关键字 
    @action searchFuzzy = async  (params) => {
        const data = await searchFuzzy(params)
        console.log(data.data)
        this.filterData=data.data
    }
}