//引入模块
import Home from './moduls/home'
import MyLogin from './login/login'
//实例化模块
const home = new Home()
const login = new MyLogin()
export default {
    home,
    login
}