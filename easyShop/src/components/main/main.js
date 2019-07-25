import React, { Component } from 'react'
import './main.scss'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <main className="home_main">

                </main>
                <footer className="home_footer">
                    <dl>
                        <dt><i className="iconfont icon-shouye"></i></dt>
                        <dd>首页</dd>
                    </dl>
                    <dl>
                        <dt><i className="iconfont icon-gongzuojilu"></i></dt>
                        <dd>专题</dd>
                    </dl>
                    <dl>
                        <dt><i className="iconfont icon-gongzuo"></i></dt>
                        <dd>分类</dd>
                    </dl>
                    <dl>
                        <dt><i className="iconfont icon-gouwuche"></i></dt>
                        <dd>购物车</dd>
                    </dl>
                    <dl>
                        <dt><i className="iconfont icon-icongerenzhongxin-01"></i></dt>
                        <dd>我的</dd>
                    </dl>
                </footer>
            </div>
        )
    }
}
