import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { PickerView, Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';

import './index.scss'
let city=null;

@inject('mine')
@observer

class Address extends Component {
    state = {
        flag: false,
        province: [
            {
                label: '北京',
                value: '01',
                children: [
                    {
                        label: '东城区',
                        value: '011',
                    },
                    {
                        label: '西城区',
                        value: '012',
                    },
                    {
                        label: '崇文区',
                        value: '013',
                    },
                    {
                        label: '宣武区',
                        value: '014',
                    },
                ],
            },
            {
                label: '浙江',
                value: '02',
                children: [
                    {
                        label: '杭州',
                        value: '021',
                        children: [
                            {
                                label: '西湖区',
                                value: '0211',
                            },
                            {
                                label: '上城区',
                                value: '0212',
                            },
                            {
                                label: '江干区',
                                value: '0213',
                            },
                            {
                                label: '下城区',
                                value: '0214',
                            },
                        ],
                    },
                    {
                        label: '宁波',
                        value: '022',
                        children: [
                            {
                                label: 'xx区',
                                value: '0221',
                            },
                            {
                                label: 'yy区',
                                value: '0222',
                            },
                        ],
                    },
                    {
                        label: '温州',
                        value: '023',
                    },
                    {
                        label: '嘉兴',
                        value: '024',
                    },
                    {
                        label: '湖州',
                        value: '025',
                    },
                    {
                        label: '绍兴',
                        value: '026',
                    },
                ],
            },
        ],
        modal2: false,
        value: null,
        active:false,
    }
    componentDidMount() {
        this.props.mine.getAddress()
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onChange = (value) => {
        city=value;
    }
    save(){
        let obj={
            address:this.refs.address.value,
            city_id:city[1]===undefined?"":Number(city[1]),
            district_id:city[2]===undefined?"":Number(city[2]),
            is_default:this.state.active,
            mobile:this.refs.mobile.value,
            name:this.refs.name.value,
            province_id:city[0]===undefined?"":Number(city[0]),
        }
        this.setState({flag:false})
        this.props.mine.addAddress(obj)
    }
    dele(id){
        this.props.mine.delAddress({id})
    }
    render() {
        let { flag } = this.state;
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
                            <div className='ipt'>
                                <input type='text' placeholder='姓名' ref='name' />
                            </div>
                            <div className='ipt'>
                                <input type='text' placeholder='电话号码' ref='mobile'/>
                            </div>
                            <div className='ipt' onClick={()=>{this.setState({modal2:true})}}>
                                <input type='text' placeholder='' />
                            </div>
                            <div className='ipt'>
                                <input type='text' placeholder='详细地址' ref='address'/>
                            </div>
                            <div className='isDefaultAddress' onClick={()=>{this.setState({active:!this.state.active})}}>
                                设置默认地址 {this.state.active===false?<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC' />:
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' />}
                            </div>
                            <div className='closeAddress'>
                                <div onClick={() => { this.setState({ flag: false }) }}>取 消</div>
                                <div onClick={()=>{this.save()}}>保 存</div>
                            </div>
                        </div>}
                        <div className='addressList'>
                            {
                                this.props.mine.addressData && this.props.mine.addressData.map((item) => {
                                    return (<div className='addressItem' key={item.id}>
                                        {item.is_default === 1 ? <div className='isChooseAddress'></div> : null}
                                        <div className='addressMsg'>
                                            <div className='concatName'>{item.name}</div>
                                            <div className='addressDetail'>
                                                <div className='concatPhone'>15034027868</div>
                                                <div className='concatAddress'>{item.address}</div>
                                                <div className='concatAddress'>上地软件园38</div>
                                            </div>
                                            <div className='deleteAddress' onClick={()=>{this.dele(item.id)}}>
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
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                >
                    <div className='btn'><button>取消</button><button>确定</button></div>
                    <PickerView
                        data={this.state.province}
                        onChange={this.onChange}
                        onScrollChange={this.onScrollChange}
                        value={['02', '02-1', '02-1-1']}
                    />
                </Modal>
            </div>
        )
    }
}

export default Address
