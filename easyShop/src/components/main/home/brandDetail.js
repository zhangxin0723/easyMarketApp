import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './index.scss'
import { NavLink } from 'react-router-dom'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('home')
@observer

class BrandDetail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.home.getBrandDetail({ id })
        this.props.home.getBrandDetailList({ brandId: id })
        lazyLoad(this.refs.load)
    }
    render() {
        if (!this.props.home.brandData) {
            return null
        }
        if (!this.props.home.brandDetailData) {
            return null
        }
        let { name, simple_desc, app_list_pic_url } = this.props.home.brandData
        let { data } = this.props.home.brandDetailData;
        return (
            <div className='App_brandDetail' ref='load'>
                <div className='noTabPageContent'>
                    <div className='header'>
                        <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                        <div className='title'>{name}</div>
                        <div className='right'></div>
                    </div>
                    <div className='brandDetail'>
                        <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={app_list_pic_url} alt='' />
                        {/* <img src={app_list_pic_url} alt='' /> */}
                        <div className='breadDesc'>{simple_desc}</div>
                    </div>
                    <div className='brandGoodsList'>
                        <div className='goodsListWrap'>
                            <div className='goodsList'>
                                {
                                    data.length !== 0 ? data.map(item => {
                                        return (<NavLink to={`/goods/${item.id}`} className='goodsItem' key={item.id}>
                                            <div className='goodsItemImg'>
                                                <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.list_pic_url} alt='' />
                                                {/* <img src={item.list_pic_url} alt='' /> */}
                                            </div>
                                            <div className='goodsItemName'>{item.name}</div>
                                            <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                        </NavLink>)
                                    }) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandDetail
