import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main'
//登录页面
import Login from './components/login/login'
import './fonts/iconfont.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//专题详情
import topicDetail from './components/main/Topic/topicDetail'
//全部评论
import commnet from './components/main/Topic/comment'
//点击跳留言
import commentWrite from './components/main/Topic/topicCommentWrite'
//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'
//解决300ms延迟问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                <Route path='/main' component={Main}></Route>
                <Route path='/login' component={Login} />
                <Route path='/topicDetail/:id' component={topicDetail} />
                <Route path='/comment/:id' component={commnet} />
                <Route path='/commentWrite' component={commentWrite} />
                <Redirect to="/main/home"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
