import React, { Component } from 'react'
import {inject , observer} from 'mobx-react'
import './index.scss'
@inject('goods')
@observer
class CartImg extends Component {
    state = {
        checkall:true,
        sum:[]
    }
    checkout() {
        this.setState({
            checkall:!this.state.checkall
        })
        let productIds = this.props.item.product_id
        this.props.goods.getCartChecked({isChecked:this.state.checkall=== true ? 0 : 1 ,productIds})
    }
    render() {
        return (
            <div className='main_checkout' onClick={() => {this.checkout()}}>
                {
                this.state.checkall === true ? 
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' alt='' /> :
                
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt=""/>  
                }
            </div>
        )
    }
}
export default CartImg