import {observable,action} from 'mobx'
import {login} from '../../../services/login'
import {setToken} from '../../../utils/index'
export default class MyLogin {
     //@observable 修饰符
     @observable data = []
     //@action 修饰方法
     @action getData = async (mobile,password)=>{
         const data = await login(mobile,password)
         if(data.errno === 0) {
            setToken(data.data.sessionKey)
         }
     }
}