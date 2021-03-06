import React, { Component } from 'react'  // eslint-disable-line
import { inject, observer } from 'mobx-react'
import Swiper from 'swiper'
import './goods.scss'
import { Toast } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('goods', 'topic')
@observer

class Goods extends Component {
    constructor() {
        super()
        this.swiperDom = React.createRef()
        this.state = {
            modal1: false,
            modal2: false,
            flag:false,
            goodsNum:0,
            Collect:false,
            userHasCollect:0
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.goods.getGoods({ id })
        this.props.topic.getCommentList({ valueId: id, typeId: 0, page: 1, size: 1 })
        this.props.goods.getRelated({ id })
        this.props.goods.getCartSum()
        lazyLoad(this.refs.load)
    }
    componentWillReceiveProps(nextProps){
        let id = nextProps.match.params.id;
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
    showModal() {
        this.setState({
            flag:!this.state.flag
        })
    }
    onClose() {
        this.setState({
            flag:false
        })
    }
    //减少
    decrease() {
        if(this.state.goodsNum === 0) {
            return 
        }
        this.setState({
            goodsNum:this.state.goodsNum -=1    // eslint-disable-line
        })
    }
    //增加
    increase() {
        this.setState({
            goodsNum:this.state.goodsNum +=1 // eslint-disable-line
        })
    }
    //加入购物车
    failToast() {
        if(this.state.goodsNum === 0) {
            Toast.fail('请选择商品数量', 1);
        } else if(this.state.goodsNum >= 0) {
            Toast.success('添加成功', 1);
            let goodsId = this.props.goods.goodsData.info.id
            let productId = this.props.goods.goodsData.productList[0].id
            let number = this.state.goodsNum
            this.props.goods.addGoodsCart({goodsId,productId,number})  
        }
    }
    loadingToast() {
        Toast.loading('下单功能还未GET,耐心等待~', 1, () => {
          console.log('Load complete !!!');
        });
    }
    //点击收藏
    checkCollect() {
        let valueId = this.props.goods.goodsData.info.id
        this.props.goods.addCollect({typeId:0,valueId},valueId)
    }
    render() {
        return (
            <div className='App' ref='load'>
                <div className='noTabPageContent'>
                    <div className='goodsPage'>
                        <div className='header'>
                            <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>{this.props.goods.goodsData && this.props.goods.goodsData.info.name}</div>
                            <div className='right'></div>
                        </div>
                        <div className='banner'>
                            <div className='swiper-container' ref={this.swiperDom}>
                                <div className='swiper-wrapper'>
                                    {
                                        this.props.goods.goodsData && this.props.goods.goodsData.gallery.map(item => {
                                            return (<div className='swiper-slide' key={item.id}>
                                                <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.img_url} alt='' />
                                                {/* <img src={item.img_url} alt='' /> */}
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
                            <div> x {this.state.goodsNum}</div>
                            <div>选择规格<i className='iconfont icon-angle-right'></i></div>
                        </div>
                        {this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.length !== 0 ? <div className='goodsComment'>
                            <div className='goodsCommentTitle'>
                                <div>评论（{this.props.topic && this.props.topic.mytopicComment.count}）</div>
                                <div><NavLink to={`/comment/${this.props.goods.goodsData && this.props.goods.goodsData.info.id}?typeId=0`}>
                                    查看全部
                                    <i className='iconfont icon-angle-right'></i>
                                </NavLink></div>
                            </div>
                            <div className='commentList'>
                                {
                                    this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.map((item, index) => {
                                        return (<div className='commentItem' key={item.id + 'id'}>
                                            <div className='userInfo'>
                                                <div>{item.user_info.name ? item.user_info.name : "匿名用户"}</div>
                                                <div>{item.add_time}</div>
                                            </div>
                                            <div className='userComment'>{item.content}</div>
                                            <div className='commentPicList'>
                                                {
                                                    item.pic_list.length !== 0 ? item.pic_list.map(val => {
                                                        return <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={val.pic_url} key={val.comment_id} alt='' />
                                                        // return <img src={val.pic_url} key={val.comment_id} alt='' />
                                                    }) : null
                                                }
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div> : null}
                        {this.props.goods.goodsData && this.props.goods.goodsData.attribute.length !== 0 ? <div className='goodsAttribute'>
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
                        </div> : null}
                        <div className='topicDetailImg' dangerouslySetInnerHTML={{ __html: this.props.goods.goodsData && this.props.goods.goodsData.info.goods_desc }}>
                            {/* {
                                this.props.goods.goodsData && this.props.goods.goodsData.info.goods_desc
                            } */}
                        </div>
                        <div className='goodsAttribute'>
                            <div className='goodsAttributeLine'>常见问题</div>
                            {
                                this.props.goods.goodsData && this.props.goods.goodsData.issue.map(item => {
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
                        <div className='goodsAttribute'>
                            <div className='goodsAttributeLine'>大家都在看</div>
                        </div>
                        <div className='goodsList'>
                            <div className='goodsList'>
                                {
                                    this.props.goods.relatedData && this.props.goods.relatedData.map(item => {
                                        return (<div className='goodsItem' key={item.id} onClick={()=>{this.props.history.push({pathname:`/goods/${item.id}`})}}>
                                            <div className='goodsItemImg'>
                                                <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.list_pic_url} alt='' />
                                                {/* <img src={item.list_pic_url} alt='' /> */}
                                            </div>
                                            <div className='goodsItemName'>{item.name}</div>
                                            <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='goodsPageDo'>
                            <div className='isLike' onClick={() => {this.checkCollect()}}>
                            {
                                this.props.goods.goodsData&&this.props.goods.goodsData.userHasCollect === 0 ?  '☆'  : "★" 
                            }
                            </div>

                            <div className='cartNum' onClick={() => {this.props.history.push('/main/cart')}}>
                                <i className='iconfont icon-gouwuche-xuanzhong'>
                                    <span>{this.props.goods.Sum.goodsCount}</span>
                                </i>
                            </div>
                            <div className='addCart' onClick={() => this.showModal('modal2')}>加入购物车</div>
                            <div className='payGoods'>立即购买</div>
                        </div>
                    </div>
                </div>
                {this.state.flag === true ? <div className='am-modal-container-1564386063872'>
                    <div>
                    <div className='am-modal-mask'></div>
                    <div className='am-modal-wrap am-modal-wrap-popup' role='dialog'>
                        <div className='am-modal am-modal-popup am-modal-popup-slide-up'>
                            <div className='am-modal-content'>
                                <div className='am-modal-body'>
                                    <div className='goodsSizeDo'>
                                        <div className='goodsSizeSetMsg'>
                                            <img src={this.props.goods.goodsData && this.props.goods.goodsData.info.list_pic_url} alt=""/>
                                            <div className='gooodsSizePriceAndSize'>
                                                <div>
                                                    单价：
                                                    <span>￥{this.props.goods.goodsData && this.props.goods.goodsData.info.retail_price}</span>
                                                </div>
                                                <div>
                                                    库存：
                                                    <span>{this.props.goods.goodsData && this.props.goods.goodsData.info.goods_number}件</span>
                                                </div>
                                                <div>
                                                    已选择：
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className='closeModel' onClick={() => {this.onClose('modal1')}}>
                                                <i className='iconfont icon-quxiao'></i>
                                            </div>
                                        </div>
                                        <div className='goodsSizeWrap'>
                                            <div className='goodsSizeItem'>
                                                <div className='goodsSizeItemName'>数量</div>
                                                <div className='goodsSizeListWrap'>
                                                    <div className='goodsBuyCount'>
                                                        <div className='onePx_border' onClick={() => {this.decrease()}}>-</div>
                                                        <div className='onePx_border'>{this.state.goodsNum}</div>
                                                        <div className='onePx_border' onClick={() => {this.increase()}}>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='goodsDoWrap'>
                                        <div onClick={() => {this.failToast()}}>加入购物车</div>
                                        <div onClick={() => {this.loadingToast()}}>立即下单</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div> : null}
            </div>
        )
    }
}

export default Goods
