import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './fonts/iconfont.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'
import 'antd-mobile/dist/antd-mobile.css'

import Login from './components/login/login'
//路由
import routes from './router/config'
//判断是否登录
import { getToken } from './utils/index'
//解决300ms延迟问题
var FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                {routes.map((item, index) => {
                    return <Route key={index} path={item.path} render={(props) => {
                        if (item.children) {
                            return <item.component {...props} children={item.children} ></item.component>
                        } else {
                            return <item.component {...props}></item.component>
                        }
                    }}></Route>
                })}
                <Redirect to="/main/home"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
