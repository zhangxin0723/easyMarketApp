import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import {getToken} from '../../utils/index'
import './login.scss'
@inject('login')
@observer
class login extends Component {
    constructor() {
        super()
        this.state = {
            user:'',
            pwd:''
        }
        this.getuser = React.createRef()
        this.getpwd = React.createRef()
    }
    loginBtn() {
        let mobile = this.getuser.current.value
        let password = this.getpwd.current.value
        this.props.login.getData({mobile,password})
        if(getToken()) {
            window.localStorage.setItem('user',mobile)
            this.props.history.push('/main/home')
        }
    }
    render() {
        return (
            <div className='wrap'>
                <div className='logo'>
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>
                <div className='login_main'>
                    <div className='login_input'>
                        <input type="text" placeholder='请输入用户名' ref={this.getuser}  />
                    </div>
                    <div className='login_input'>
                        <input type="password" placeholder='请输入密码' ref={this.getpwd} />
                    </div>
                    <div className='login_button'>
                        <span onClick={() => this.loginBtn()}>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default login
