//引入模块
import Home from './moduls/home'
import MyLogin from './moduls/login/login'
import Goods from './moduls/goods'
//实例化模块
const home = new Home()
const login = new MyLogin()
const goods = new Goods()
export default {
    home,
    login,
    goods
}