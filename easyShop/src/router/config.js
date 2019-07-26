import React from "react"
import LoadAble from "react-loadable" //按需加载
<<<<<<< HEAD
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
=======

>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
//定义一个函数
function Load(){
    return <div>
        Loading...
    </div>
}
<<<<<<< HEAD
const Home=LoadAble({
    loader:()=>import('../components/main/Home'),
    loading:Load
})
=======
//登录
const Login=LoadAble({
    loader:()=>import( "../components/login/login"),
    loading:Load
})
//main
const Main=LoadAble({
    loader:()=>import( "../components/main/main"),
    loading:Load
})
//首页
const Home=LoadAble({
    loader:()=>import( "../components/main/Home"),
    loading:Load
})
//主题
>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
const Topic=LoadAble({
    loader:()=>import("../components/main/Topic"),
    loading:Load
})
<<<<<<< HEAD
=======
//分类
>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
const Catelog=LoadAble({
    loader:()=>import("../components/main/Catelog"),
    loading:Load
})
<<<<<<< HEAD
=======
//购物车
>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
const Cart=LoadAble({
    loader:()=>import("../components/main/Cart"),
    loading:Load
})
<<<<<<< HEAD
=======
//我的
>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
const Mine=LoadAble({
    loader:()=>import("../components/main/Mine"),
    loading:Load
})
<<<<<<< HEAD
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
=======


let routes=[
    {
        path:"/login",
        component:Login
    },{
        path:'/main',
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },{
                path:"/main/topic",
                component:Topic
            },{
                path:"/main/catelog",
                component:Catelog
            },{
                path:"/main/cart",
                component:Cart
            },{
                path:"/main/mine",
                component:Mine
            }
        ]
    }
]
export default routes
>>>>>>> c7a808377f856d585cbce5047beda7c1d3c07781
