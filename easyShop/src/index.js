import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home'
import {Switch,Redirect,Route,BrowserRouter} from 'react-router-dom'
//引入mobx
import {Provider} from 'mobx-react'
import store from './store/index'
//登录页面
import Login from './components/login/login'
//解决300ms延迟问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Redirect to='/login'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
