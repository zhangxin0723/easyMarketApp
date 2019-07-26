import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('home')
@observer

class Categorys extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.home.getCatelog({ categoryId: this.props.match.params.id })
    }
    render() {
        if (!this.props.home.catalog) {
            return null
        }
        console.log(this.props.home.catalog)
        let { goodsList } = this.props.home.catalog;
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div className='header'>
                        <div className='left'><i className='iconfont icon-angle-left'></i></div>
                        <div className='title'>奇趣分类</div>
                        <div className='right'></div>
                    </div>
                    <div className='tabWrap'></div>
                    <div className='categoryDetail'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsList'>
                            {
                                goodsList.map(item => {
                                    return (<a className='goodsItem' key={item.id}>
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
                </div>
            </div>
        )
    }
}

export default Categorys
