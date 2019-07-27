import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('home')
@observer

class BrandDetail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(this.props)
        this.props.home.getBrandDetail({id})
    }
    render() {
        return (
            <div className='App_brandDetail'>
                <div className='noTabPageContent'>
                    <div className='header'>
                        <div className='left'><i className='iconfont icon-angle-left'></i></div>
                        <div className='title'>奇趣分类</div>
                        <div className='right'></div>
                    </div>
                    <div className='brandDetail'>
                        <img src='http://yanxuan.nosdn.127.net/658f09b7ec522d31742b47b914d64338.png' />
                        <div className='breadDesc'>严选寻访Calvin Klein品牌的制造商，深入世界领带第一生产地，设计与品质并重，致力于给消费者带来优质典雅的服饰用品。</div>
                    </div>
                    <div className='brandGoodsList'>
                        <div className='goodsListWrap'>
                            <div className='goodsList'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandDetail
