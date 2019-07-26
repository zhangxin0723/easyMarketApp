import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './index.scss'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

@inject('home')
@observer

class Home extends Component {
    componentDidMount() {
        this.props.home.getHomeData()
        new Swiper(this.refs.swiperDom, {
            observer: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: this.refs.swiperPage,
            },
        })
        new Swiper(this.refs.swiperTop,{
            observer:true,
            loop:true,
            spaceBetween: 30
        })
    }
    render() {
        return (
            <div className="home">
                <div className="home_banner">
                    <div className='swiper-container' ref='swiperDom'>
                        <div className='swiper-wrapper'>
                            {
                                this.props.home.homeData && this.props.home.homeData.banner.map(item => {
                                    return (<div className='swiper-slide' key={item.id}>
                                        <img src={item.image_url} />
                                    </div>)
                                })
                            }
                        </div>
                        <div className="swiper-pagination" ref='swiperPage'></div>
                    </div>
                </div>
                <nav className="nav_list">
                    {
                        this.props.home.homeData && this.props.home.homeData.channel.map(item => {
                            return (<dl key={item.id}>
                                <dt>
                                    <img src={item.icon_url} />
                                </dt>
                                <dd>{item.name}</dd>
                            </dl>)
                        })
                    }
                </nav>
                <div className='brandBox'>
                    <div className='brandTitle'>品牌制造商直供</div>
                    <div className='brandWrap'>
                        {
                            this.props.home.homeData && this.props.home.homeData.brandList.map(item => {
                                return (<a className='brandItem' key={item.id}>
                                    <div className='brandItemName'>{item.name}</div>
                                    <div className='brandItemMinPrice'>{item.floor_price}元起</div>
                                    <img src={item.new_pic_url} />
                                </a>)
                            })
                        }
                    </div>
                </div>
                <div className='newGoodsBox'>
                    <div className='newGoodsTitle'>新品首发</div>
                    <div className='newGoodsWrap'>
                        {
                            this.props.home.homeData && this.props.home.homeData.newGoodsList.map(item => {
                                return (<a className='newGoodsItem' key={item.id}>
                                    <img src={item.list_pic_url} />
                                    <div className='newGoodsName'>{item.name}</div>
                                    <div className='newGoodsPrice'>￥{item.retail_price}</div>
                                </a>)
                            })
                        }
                    </div>
                </div>
                <div className='hotGoodsBox'>
                    <div className='hotGoodsTitle'>人气推荐</div>
                    <div className='hotGoodsWrap'>
                        {
                            this.props.home.homeData && this.props.home.homeData.hotGoodsList.map(item => {
                                return (<a className='hotGoodsItem' key={item.id}>
                                    <img src={item.list_pic_url} />
                                    <div className='hotGoodsInfos'>
                                        <div className='hotGoodsName'>{item.name}</div>
                                        <div className='hotGoodsInfo'>{item.goods_brief}</div>
                                        <div className='hotGoodsPrice'>￥{item.retail_price}</div>
                                    </div>
                                </a>)
                            })
                        }
                    </div>
                </div>
                <div className='topGoodsBox'>
                    <div className='topGoodsTitle'>专题精选</div>
                    <div className='topGoodsWrap'>
                        <div className='swiper-container' ref='swiperTop'>
                            <div className='swiper-wrapper'>
                                {
                                    this.props.home.homeData && this.props.home.homeData.topicList.map(item => {
                                        return (<div className='swiper-slide' key={item.id}>
                                            <img src={item.item_pic_url} />
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                首页
            </div>
        )
    }
}
export default Home
