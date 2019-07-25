import React, { Component } from 'react'
import './login.scss'
class login extends Component {
    loginBtn() {
        console.log(1)
    }
    render() {
        return (
            <div className='wrap'>
                <div className='logo'>
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>
                <div className='login_main'>
                    <div className='login_input'>
                        <input type="text" placeholder='请输入用户名' />
                    </div>
                    <div className='login_input'>
                        <input type="password" placeholder='请输入密码' />
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
