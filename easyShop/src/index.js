import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main'
//登录页面
import Login from './components/login/login'
import './fonts/iconfont.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//首页分类详情
import Categorys from './components/main/Home/categorys.js'
//首页商家详情
import BrandDetail from './components/main/Home/brandDetail'

//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'
import 'antd-mobile/dist/antd-mobile.css'
//解决300ms延迟问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                <Route path='/main' component={Main}></Route>
                <Route path='/login' component={Login} />
                <Route path='/categorys/:id' component={Categorys}></Route>
                <Route path='/brandDetail/:id' component={BrandDetail}></Route>
                <Redirect to="/main/home"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
