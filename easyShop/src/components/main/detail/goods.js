import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Swiper from 'swiper'
import './goods.scss'

@inject('goods', 'topic')
@observer

class Goods extends Component {
    constructor() {
        super()
        this.swiperDom = React.createRef()
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.goods.getGoods({ id })
        this.props.topic.getCommentList({ valueId: id, typeId: 0, page: 1, size: 1 })
        this.props.goods.getRelated({ id })
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
        console.log(this.props.goods)
        return (
            <div className='App'>
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
                        {this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.length !== 0 ? <div className='goodsComment'>
                            <div className='goodsCommentTitle'>
                                <div>评论（{this.props.topic && this.props.topic.mytopicComment.count}）</div>
                                <div><a href={`/comment/${this.props.goods.goodsData.info.id}?typeId=0`}>
                                    查看全部
                                    <i className='iconfont icon-angle-right'></i>
                                </a></div>
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
                                                        return <img src={val.pic_url} key={val.comment_id} />
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
                                        return (<a className='goodsItem' key={item.id} href={`/goods/${item.id}`}>
                                            <div className='goodsItemImg'>
                                                <img src={item.list_pic_url} />
                                            </div>
                                            <div className='goodsItemName'>{item.name}</div>
                                            <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                        </a>)
                                    })
                                }
                            </div>
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

export default Goods
