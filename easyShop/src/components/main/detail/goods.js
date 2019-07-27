import React, { Component } from 'react'
import './goods.scss'

class goods extends Component {
    render() {
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div className='goodsPage'>
                        <div className='header'>
                            <div className='left'><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>日式和风懒人沙发 </div>
                            <div className='right'></div>
                        </div>
                    </div>
                    <div className='goodsPageDo'>
                        <div className='isLike'>☆</div>
                        <div className='cartNum'>
                            <i className='iconfont icon-gouwuche-xuanzhong'>
                                <span>3</span>
                            </i>
                        </div>
                        <div className='addCart'>加入购物车</div>
                        <div className='payGoods'>立即购买</div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default goods
