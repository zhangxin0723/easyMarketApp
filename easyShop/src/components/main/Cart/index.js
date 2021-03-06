import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import CartImg from './CartImg'
import { Toast} from 'antd-mobile';
import './index.scss'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('goods')
@observer
class Cart extends Component {
    state = {
        flag: false,
        checkall: false
    }
    //编辑
    accomplish() {
        this.setState({
            flag: true
        })
    }
    //完成
    accomplishs() {
        this.setState({
            flag: false
        })
    }
    componentDidMount() {
        this.props.goods.getAddGoodsCart()
        lazyLoad(this.refs.load)
    }
    //点击全选
    checkedToCheck() {
        let arr = []
        this.props.goods.information.forEach(item => {
            arr.push(item.product_id)
        })
        let productIds = arr.join(',')
        this.props.goods.getCartChecked({ isChecked: this.props.goods.CheckedToAll ? 0 : 1, productIds }, 'checkall')
    }
    //减少
    decrease(item) {
        if (item.number <= 1) {
            return
        }
        let obj = {
            goodsId: item.goods_id,
            id: item.id,
            number: item.number -= 1,
            productId: item.product_id
        }
        this.props.goods.CartUpdate(obj)
    }
    //加加
    increase(item) {
        let obj = {
            goodsId: item.goods_id,
            id: item.id,
            number: item.number += 1,
            productId: item.product_id
        }
        this.props.goods.CartUpdate(obj)
    }
    //删除
    CartDelete() {
        let arr = []
        this.props.goods.information.filter(item => {
            if (item.checked === 1) {
                arr.push(item.product_id)
            }
            return arr
        })
        let productIds = arr.join(',')
        this.props.goods.CartDelete({ productIds })
    }
    render() {
        return (
            <div className='Cart_wrap' ref='load'>
                <header className="headers">
                    <ul>
                        <li>
                            <span>★</span>
                            30天无忧退货
                        </li>
                        <li>
                            <span>★</span>
                            48小时快速退款
                        </li>
                        <li>
                            <span>★</span>
                            满88元免邮费
                        </li>
                    </ul>
                </header>
                <section className="mains">
                    {this.props.goods.information && this.props.goods.information.map(item => {
                        return <div key={item.id} className='main_box'>
                            <CartImg item={item}></CartImg>
                            <div className='main_goods_img'>
                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.list_pic_url} alt='' />
                                {/* <img src={item.list_pic_url} alt="" /> */}
                            </div>
                            {
                                this.state.flag === false ? <React.Fragment>
                                    <div className="main_cart_cont">
                                        <div>{item.goods_name}</div>
                                        <div></div>
                                        <div style={{ color: 'red' }}>￥{item.market_price}</div>
                                    </div>
                                    <div className='main_cart_num'>
                                        x{item.number}
                                    </div>
                                </React.Fragment> : <div className='main_cart_centent'>
                                        <div className='main_cart_centent_name'>已选择：</div>
                                        <div className='main_cart_centent_box'>
                                            <div style={{ color: 'red' }}>
                                                ￥{item.market_price}
                                            </div>
                                            <div>
                                                <div className='main_cart_centent_wrap'>
                                                    <div className='cart_decrease' onClick={() => { this.decrease(item) }}>-</div>
                                                    <div className='cont'>{item.number}</div>
                                                    <div className='cart_increase' onClick={() => { this.increase(item) }}>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    })}
                    {this.state.flag === false ? <div className='footer'>
                        <div className='footer_checkout' onClick={() => { this.checkedToCheck() }}>
                            {this.props.goods.CheckedToAll && this.props.goods.CheckedToAll === true ?
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' alt='' />
                                : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="" />}
                        </div>
                        <div className='footer_checkall'>
                            已选({this.props.goods.cartChecked && this.props.goods.cartChecked.checkedGoodsCount})  ￥{this.props.goods.cartChecked && this.props.goods.cartChecked.checkedGoodsAmount}
                        </div>
                        <div className='footer_compile' onClick={() => {this.accomplish()}}>编辑</div>
                        <div className='footer_order' onClick={() => {Toast.fail('你还没有绑定支付功能哦 !!!', 1);}}>下单</div>
                    </div> : <div className='cartGoodsDo'>
                                <div className='footer_checkout' onClick={() => {this.checkedToCheck()}}>
                                {this.props.goods.CheckedToAll && this.props.goods.CheckedToAll === true ?
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' alt='' /> 
                               :<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt=""/>}
                                </div>
                                <div className='footer_checkall'>
                                    已选({this.props.goods.information && this.props.goods.information.length}) 
                                </div>
                            <div className='footer_accomplish' onClick={() => { this.accomplishs() }}>完成</div>
                            <div className='footer_delete' onClick={() => { this.CartDelete() }}>删除</div>
                        </div>}
                </section>
            </div>
        )
    }
}
export default Cart