import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/iconfont.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'
import 'antd-mobile/dist/antd-mobile.css'
//路由
import routes from './router/config'
import 'swiper/dist/css/swiper.css'

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
