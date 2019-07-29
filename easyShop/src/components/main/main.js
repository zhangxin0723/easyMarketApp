import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import routes from '../../router/config'
import './main.scss'
//首页
import Home from './Home'
//主题
import Topic from './Topic'
//分类
import Catelog from './Catelog'
//购物车
import Cart from './Cart'
//我的
import Mine from './Mine'
export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <main className="main_main">
                   {
                       this.props.children.map((item,index) => {
                           return <Route key={index} path={item.path} render={(props) => {
                                if(item.children) {
                                    return <item.component {...props} child={item.children}></item.component>
                                } else {
                                    return <item.component {...props}></item.component>
                                }
                           }}></Route>
                       })
                   }
                    {/* <Route path='/main/home' component={Home}></Route>
                    <Route path='/main/topic' component={Topic}></Route>
                    <Route path='/main/catelog' component={Catelog}></Route>
                    <Route path='/main/cart' component={Cart}></Route>
                    <Route path='/main/mine' component={Mine}></Route> */}
                </main>
                <footer className="main_footer">
                    <NavLink to='/main/home' activeClassName="footer_active">
                        <dl>
                            <dt><i className="iconfont icon-shouye"></i></dt>
                            <dd>首页</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/main/topic' activeClassName="footer_active">
                        <dl>
                            <dt><i className="iconfont icon-gongzuojilu"></i></dt>
                            <dd>专题</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/main/catelog' activeClassName="footer_active">
                        <dl>
                            <dt><i className="iconfont icon-gongzuo"></i></dt>
                            <dd>分类</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/main/cart' activeClassName="footer_active">
                        <dl>
                            <dt><i className="iconfont icon-gouwuche"></i></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <NavLink to='/main/mine' activeClassName="footer_active">
                        <dl>
                            <dt><i className="iconfont icon-icongerenzhongxin-01"></i></dt>
                            <dd>我的</dd>
                        </dl>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
