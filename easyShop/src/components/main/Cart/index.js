import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
import CartImg from './CartImg'
import './index.scss'
@inject('goods')
@observer
class Cart extends Component {
    state = {
        flag:false,
        checkall:false
    }
    //编辑
    accomplish() {
        this.setState({
            flag:true
        })
    }
    //完成
    accomplishs() {
        this.setState({
            flag:false
        })
    }
    componentDidMount() {
        this.props.goods.getAddGoodsCart()
    }
    render() {
        if(this.props.goods.cartChecked) {
            let sum = this.props.goods.cartChecked.reduce((a,b) => {
                return a + b.market_price * b.number
            },0)
            console.log(sum)
        }
        return (
            <div className='Cart_wrap'>
                <header className="header">
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
                           return  <div key={item.id} className='main_box'>
                                        <CartImg item={item}></CartImg>
                                        <div className='main_goods_img'>
                                            <img src={item.list_pic_url} alt=""/>
                                        </div>
                                       { 
                                        this.state.flag ===false ? <React.Fragment>
                                       <div className="main_cart_cont">
                                            <div>{item.goods_name}</div>
                                            <div></div>
                                            <div style={{color:'red'}}>￥{item.market_price}</div>
                                        </div>
                                        <div className='main_cart_num'>
                                            x{item.number}
                                        </div>
                                        </React.Fragment> :<div className='main_cart_centent'>
                                                                <div className='main_cart_centent_name'>已选择：</div>
                                                                <div className='main_cart_centent_box'>
                                                                    <div style={{color:'red'}}>
                                                                        ￥{item.market_price}
                                                                    </div>
                                                                    <div>
                                                                        <div className='main_cart_centent_wrap'>
                                                                            <div className='cart_decrease'>-</div>
                                                                            <div className='cont'>{item.number}</div>
                                                                            <div className='cart_increase'>+</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        }
                                   </div>
                       })}
                   {this.state.flag === false ? <div className='footer'>
                        <div className='footer_checkout'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt=""/>
                        </div>
                        <div className='footer_checkall'>
                            已选(4)  ￥{ 
                                this.props.goods.cartChecked && 
                                this.props.goods.cartChecked.reduce((a,b) => {
                                    return a + b.market_price * b.number
                                },0)}
                        </div>
                        <div className='footer_compile' onClick={() => {this.accomplish()}}>编辑</div>
                        <div className='footer_order'>下单</div>
                    </div> : <div className='cartGoodsDo'>
                                <div className='footer_checkout'>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt=""/>
                                </div>
                                <div className='footer_checkall'>
                                    已选() 
                                </div>
                                <div className='footer_accomplish' onClick={() => {this.accomplishs()}}>完成</div>
                                <div className='footer_delete'>删除</div>
                            </div> }
                </section>
            </div>
        )
    }
}
export default Cart