import React from "react"
import LoadAble from "react-loadable" //按需加载
//定义一个函数
function Load(){
    return <div>
        Loading...
    </div>
}
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
const Topic=LoadAble({
    loader:()=>import("../components/main/Topic"),
    loading:Load
})
//分类
const Catelog=LoadAble({
    loader:()=>import("../components/main/Catelog"),
    loading:Load
})
//购物车
const Cart=LoadAble({
    loader:()=>import("../components/main/Cart"),
    loading:Load
})
//我的
const Mine=LoadAble({
    loader:()=>import("../components/main/Mine"),
    loading:Load
})


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
