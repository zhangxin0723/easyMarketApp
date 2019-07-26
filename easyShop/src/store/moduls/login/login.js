import {observable,action} from 'mobx'
import {login} from '../../../services/login'
export default class MyLogin {
     //@observable 修饰符
     @observable data = ''
     //@action 修饰方法
     @action getData = (params) => {
          login(params).then(res => {
              console.log(res)
              if(res.errno === 0) {
                  alert('登录成功')
                  this.data = res.errno
              } else {
                  alert(res.errmsg)
                  this.data = res.errno
              }
          })
     }
}