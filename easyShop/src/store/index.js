//引入模块
import Home from './moduls/home'
import MyLogin from './moduls/login/login'
import Topic from './moduls/topic/topic'
import Goods from './moduls/goods'
import Catelog from './moduls/catelog'
//实例化模块
const home = new Home()
//登录
const login = new MyLogin()
//专题
const topic = new Topic()
//购物车
const goods = new Goods()
//分类
const catelog = new Catelog()
export default {
    home,
    login,
    topic,
    goods,
    catelog
}