import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('mine')
@observer

class Address extends Component {
    state = {
        flag: false
    }
    componentDidMount() {
        this.props.mine.getAddress()
    }
    render() {
        let { flag } = this.state;
        console.log(this.props)
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div id='addressPage'>
                        <div className='header'>
                            <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>我的收藏</div>
                            <div className='right'></div>
                        </div>
                        {flag && <div className='addressSetPage'>
                            <div className='addressHeader'>新建地址</div>
                            <div className='closeAddress'>
                                <div onClick={() => { this.setState({ flag: false }) }}>取 消</div>
                                <div>保 存</div>
                            </div>
                        </div>}
                        <div className='addressList'>
                            {
                                this.props.mine.addressData && this.props.mine.addressData.map((item) => {
                                    return (<div className='addressItem' key={item.id}>
                                        {item.is_default===1?<div className='isChooseAddress'></div>:null}
                                        <div className='addressMsg'>
                                            <div className='concatName'>{item.name}</div>
                                            <div className='addressDetail'>
                                                <div className='concatPhone'>15034027868</div>
                                                <div className='concatAddress'>{item.address}</div>
                                                <div className='concatAddress'>上地软件园38</div>
                                            </div>
                                            <div className='deleteAddress'>
                                                <i className='iconfont icon-lajitong'></i>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                        <div className='addAddress' onClick={() => { this.setState({ flag: true }) }}>
                            新建地址
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address
