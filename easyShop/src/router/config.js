import React from "react"
import LoadAble from "react-loadable" //按需加载
//首页
import Home from '../components/main/Home'
//主题
import Topic from '../components/main/Topic'
//分类
import Catelog from '../components/main/Catelog'
//购物车
import Cart from '../components/main/Cart'
//我的
import Mine from '../components/main/Mine'
//登录
import Login from '../components/login/login'
//定义一个函数
function Load(){
    return <div>
        Loading...
    </div>
}
const Home=LoadAble({
    loader:()=>import('../components/main/Home'),
    loading:Load
})
const Topic=LoadAble({
    loader:()=>import("../components/main/Topic"),
    loading:Load
})
const Catelog=LoadAble({
    loader:()=>import("../components/main/Catelog"),
    loading:Load
})
const Cart=LoadAble({
    loader:()=>import("../components/main/Cart"),
    loading:Load
})
const Mine=LoadAble({
    loader:()=>import("../components/main/Mine"),
    loading:Load
})
const Login=LoadAble({
    loader:()=>import("../components/login/login"),
    loading:Load
})
const Main=LoadAble({
    loader:()=>import("../components/main/main"),
    loading:Load
})
let routes = [
     {
        path:'/login',
        component:Login
     },
     {
         path:'/main',
         component:Main,
         children:[
             {
                 path:'/main/home',
                 component:Home
             },
             {
                 path:'/main/topic',
                 component:Topic
             },
             {
                 path:'/main/catelog',
                 component:Catelog
             },
             {
                path:'/main/cart',
                component:Cart
             },
             {
                path:'/main/mine',
                component:Mine
             },
         ]
     }
]