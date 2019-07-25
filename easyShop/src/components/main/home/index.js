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
                首页
            </div>
        )
    }
}
export default Home
