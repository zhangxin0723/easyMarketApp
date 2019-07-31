import React from "react"
import LoadAble from "react-loadable" //按需加载
//定义一个函数
function Load(){
    return <div>
        Loading...1111111111
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
//首页下的居家
const  Categorys = LoadAble({
    loader:()=>import('../components/main/Home/categorys'),
    loading:Load
})
//首页下的详情
const  BrandDetail = LoadAble({
    loader:()=>import('../components/main/Home/brandDetail'),
    loading:Load
})
//专题详情
const  TopicDetail = LoadAble({
    loader:()=>import('../components/main/Topic/topicDetail'),
    loading:Load
})
//专题发表评论
const  CommentWrite = LoadAble({
    loader:()=>import('../components/main/Topic/topicCommentWrite'),
    loading:Load
})
//专题查看全部评论
const  Comment = LoadAble({
    loader:()=>import('../components/main/Topic/comment'),
    loading:Load
})
//商品详情，加入购物车
const  Goods = LoadAble({
    loader:()=>import('../components/main/detail/goods'),
    loading:Load
})
//搜索
const Search=LoadAble({
    loader:()=>import ('../components/main/detail/goodSearch'),
    loading:Load
})
//收藏
const Collect=LoadAble({
    loader:()=>import('../components/main/Mine/collect'),
    loading:Load
})
//地址
const Address=LoadAble({
    loader:()=>import('../components/main/Mine/address'),
    loading:Load
})
let routes=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/main',
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home,
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
    },
    {
        path:'/categorys/:id',
        component:Categorys
    },
    {
        path:'/brandDetail/:id',
        component:BrandDetail
    },
    {
        path:'/topicDetail/:id',
        component:TopicDetail
    },
    {
        path:'/commentWrite/:id',
        component:CommentWrite
    },
    {
        path:'/comment/:id',
        component:Comment
    },
    {
        path:'/goods/:id',
        component:Goods
    },
    {
        path:'/goodSearch',
        component:Search
    },
    {
        path:'/collect',
        component:Collect
    },
    {
        path:'/address',
        component:Address
    }
]
export default routes
