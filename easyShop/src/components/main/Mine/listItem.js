import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('mine')
@observer

class ListItem extends Component {
    action() {
        this.refs.left.classList.toggle('left')
    }
    render() {
        let { value_id, goods_brief, name, retail_price, list_pic_url, type_id } = this.props;
        return (
            <div className='touchClear' onClick={(e) => { this.action('123') }} ref='touch'>
                <div className='test' ref='left'>
                    <div className='collectItem onePx_bottom'>
                        <img src={list_pic_url} className='collectImg' onClick={() => { this.props.history.push({ pathname: `/goods/${value_id}` }) }} />
                        <div className='collectMsg'>
                            <div>{name}</div>
                            <div>{goods_brief}</div>
                            <div>￥{retail_price}元</div>
                        </div>
                    </div>
                </div>
                <div className='colse' onClick={() => { this.props.mine.delCollect({ typeId: type_id, valueId: value_id }) }}>删除</div>
            </div>
        )
    }
}

export default withRouter(ListItem)
