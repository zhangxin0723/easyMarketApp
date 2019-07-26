import React, { Component, Fragment } from 'react'
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
        new Swiper(this.refs.swiperTop, {
            observer: true,
            spaceBetween: 15,
            slidesPerView: 'auto',//开启slide宽度自定义功能  
            centeredSlides: true,//首个居中  
            loop: true,
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
                                            <div className='topGoodSubTitle'>
                                                关爱他成长的每一个足迹
                                                <span className='topGoodPrice'>￥0元起</span>
                                            </div>
                                            <div className='topGoodTitle'>专业运动品牌同厂，毛毛虫鞋买二送一</div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cateGoryBox'>
                    {
                        this.props.home.homeData && this.props.home.homeData.categoryList.map(item => {
                            return (<Fragment key={item.id}><div className='cateGoryName'>{item.name}</div>
                                <div className='cateGoryGoodsWrap' >
                                {
                                    item.goodsList.map(val => {
                                        return (
                                            <a tag='div' href='#' key={val.id}>
                                                <div className='goodsItemImg'>
                                                    <img src={val.list_pic_url} />
                                                </div>
                                                <div className='goodsItemName'>{val.name}</div>
                                                <div className='goodsItemPrice'>￥{val.retail_price}</div>
                                            </a>
                                        )
                                    })
                                }
                                <a className='categoryMoreGoods'>
                                    <div>更多{item.name}好物</div>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
                                </a>
                                </div>
                            </Fragment>)
                })
            }

                </div>
            </div>
        )
    }
}
export default Home
