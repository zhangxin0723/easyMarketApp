import {observable,action} from 'mobx'
import {login} from '../../services/login'
export default class MyLogin {
     //@observable 修饰符
     @observable data = []
     //@action 修饰方法
     @action getData = ()=>{
         return login()
     }
}