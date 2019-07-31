import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('home')
@observer

class BrandDetail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.home.getBrandDetail({ id })
        this.props.home.getBrandDetailList({ brandId: id })
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
        console.log(data)
        return (
            <div className='App_brandDetail'>
                <div className='noTabPageContent'>
                    <div className='header'>
                        <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                        <div className='title'>{name}</div>
                        <div className='right'></div>
                    </div>
                    <div className='brandDetail'>
                        <img src={app_list_pic_url} />
                        <div className='breadDesc'>{simple_desc}</div>
                    </div>
                    <div className='brandGoodsList'>
                        <div className='goodsListWrap'>
                            <div className='goodsList'>
                                {
                                    data.length !== 0 ? data.map(item => {
                                        return (<a className='goodsItem' key={item.id}>
                                            <div className='goodsItemImg'>
                                                <img src={item.list_pic_url} alt='' />
                                            </div>
                                            <div className='goodsItemName'>{item.name}</div>
                                            <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                        </a>)
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
