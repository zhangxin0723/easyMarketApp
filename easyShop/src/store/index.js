//引入模块
import Home from './moduls/home'
import MyLogin from './moduls/login/login'
import Topic from './moduls/topic/topic'
//实例化模块
const home = new Home()
//登录
const login = new MyLogin()
//专题
const topic = new Topic()
export default {
    home,
    login,
    topic,
}