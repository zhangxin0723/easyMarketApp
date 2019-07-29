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

//首页分类详情
import Categorys from './components/main/Home/categorys.js'
//首页商家详情
import BrandDetail from './components/main/Home/brandDetail'
//购物车详情
import Goods from './components/main/detail/goods'

//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'
import 'antd-mobile/dist/antd-mobile.css'
//路由
import routes from './router/config'
//解决300ms延迟问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                {
                    routes.map((item,index) => {
                        console.log(item)
                        return <Route key={index} path={item.path} render={(props) => {
                           if(item.children) {
                               return <item.component {...props} children={item.children} ></item.component>
                           } else {
                               return <item.component {...props}></item.component>
                           }
                        }}></Route>
                    })
                }
                {/* <Route path='/main' component={Main}></Route>
                <Route path='/login' component={Login} />
                <Route path='/topicDetail/:id' component={topicDetail} />
                <Route path='/comment/:id' component={commnet} />
                <Route path='/commentWrite' component={commentWrite} />
                <Route path='/categorys/:id' component={Categorys}></Route>
                <Route path='/brandDetail/:id' component={BrandDetail}></Route>
                <Route path='/goods/:id' component={Goods}></Route> */}
                <Redirect to="/main/home"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
