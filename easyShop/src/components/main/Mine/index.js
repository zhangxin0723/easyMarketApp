import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { removeToken } from '../../../utils/index'
import './index.scss'

export default class Mine extends Component {
    state = {
        icon: [
            {
                class: 'icon-wodedingdan',
                name: '我的订单'
            }, {
                class: 'icon-riqixuanze',
                name: '周末拼单'
            }, {
                class: 'icon-youhuiquan-01',
                name: '优惠券'
            }, {
                class: 'icon-wodedingdan',
                name: '优选购'
            }, {
                class: 'icon-wodedingdan',
                name: '我的红包'
            }, {
                class: 'icon-wodedingdan',
                name: '会员plus'
            }, {
                class: 'icon-wodedingdan',
                name: '我的订单'
            }, {
                class: 'icon-wodedingdan',
                name: '邀请返利'
            }, {
                class: 'icon-kefu',
                name: '客服咨询'
            }, {
                class: 'icon-anquanshezhi',
                name: '账户安全'
            },
        ]
    }
    offline(item) {
        Toast.offline(`${item.name}功能还未解锁，请耐心等候~`,.8);
    }
    //退出登录
    loginOut(){
        removeToken()
        this.props.history.push({pathname:"/login"})
    }
    render() {
        return (
            <div className='App'>
                <div className='tabPageContent'>
                    <div id='minePage'>
                        <div className='userMsgWrap'>
                            <div className='userLogo'></div>
                            <div className='userMsgs'>
                                <div>15323807318</div>
                                <div>普通用户</div>
                            </div>
                        </div>
                        <div className='userPower'>
                            <div style={{ color: 'rgb(33, 150, 243)' }} onClick={()=>{this.props.history.push({pathname:'/collect'})}}>
                                <i className='iconfont icon-gongzuojilu' style={{ color: 'rgb(33, 150, 243)' }}></i>
                                <div>我的收藏</div>
                            </div>
                            <div style={{ color: 'rgb(33, 150, 243)' }} onClick={()=>{this.props.history.push({pathname:'/address'})}}>
                                <i className='iconfont icon-address' style={{ color: 'rgb(33, 150, 243)' }}></i>
                                <div>地址管理</div>
                            </div>
                            {
                                this.state.icon.map((item,index) => {
                                    return (<div key={index} onClick={()=>{this.offline(item)}}>
                                        <i className={`iconfont ${item.class}`}></i>
                                        <div>{item.name}</div>
                                    </div>)
                                })
                            }

                        </div>
                        <div className='loginOut' onClick={()=>{this.loginOut()}}>退出登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
