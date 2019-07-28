import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Swiper from 'swiper'
import './goods.scss'

@inject('goods')
@observer

class goods extends Component {
    constructor() {
        super()
        this.swiperDom = React.createRef()
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.goods.getGoods({ id })
    }
    componentDidUpdate() {
        new Swiper(this.swiperDom.current, {
            loop: true,
            pagination: {
                el: this.refs.swiperPage,
            },
            autoplay: {
                delay: 1000,
            },
        })
    }
    render() {
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div className='goodsPage'>
                        <div className='header'>
                            <div className='left'><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>{this.props.goods.goodsData && this.props.goods.goodsData.info.name}</div>
                            <div className='right'></div>
                        </div>
                        <div className='banner'>
                            <div className='swiper-container' ref={this.swiperDom}>
                                <div className='swiper-wrapper'>
                                    {
                                        this.props.goods.goodsData && this.props.goods.goodsData.gallery.map(item => {
                                            return (<div className='swiper-slide' key={item.id}>
                                                <img src={item.img_url} />
                                            </div>)
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination" ref='swiperPage'></div>
                            </div>
                        </div>
                        <ul className='serviceList'>
                            <li><span>★</span>30天无忧退货</li>
                            <li><span>★</span>48小时快速退款</li>
                            <li><span>★</span>满88元免邮费</li>
                        </ul>
                        <div className='goodsMsgWrap'>
                            <div className='goodsNameTitle'>{this.props.goods.goodsData && this.props.goods.goodsData.info.name}</div>
                            <div className='goodsNameSubTitle'>{this.props.goods.goodsData && this.props.goods.goodsData.info.goods_brief}</div>
                            <div className='goodsPriceTitle'>￥{this.props.goods.goodsData && this.props.goods.goodsData.info.retail_price}</div>
                        </div>
                        <div className='goodsSize'>
                            <div></div>
                            <div> x 0</div>
                            <div>选择规格<i className='iconfont icon-angle-right'></i></div>
                        </div>
                        <div className='goodsAttribute'>
                            <div className='goodsAttributeLine'>商品参数</div>
                            <div className='goodsAttributeList'>
                                {
                                    this.props.goods.goodsData && this.props.goods.goodsData.attribute.map((item, index) => {
                                        return (<div className='goodsAttributeItem' key={index}>
                                            <div className='attributeLabel'>{item.name}</div>
                                            <div className='attributeContent'>{item.value}</div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='goodsAttribute'>
                            <div className='goodsAttributeLine'>商品参数</div>
                            {
                                this.props.goods.goodsData && this.props.goods.goodsData.issue.map(item=>{
                                        return (<div className='problemWrap' key={item.id}>
                                        <div className='problemLabel'>
                                            <span>√</span>
                                            {item.question}
                                        </div>
                                        <div className='problemContent'>{item.answer}</div>
                                    </div>)
                                })
                            }
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
            </div>
        )
    }
}

export default goods
