import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('mine')
@observer

class Collect extends Component {
    componentDidMount() {
        this.props.mine.getCollect({ typeId: 1 })
    }
    render() {
        console.log(this.props.mine)
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div id='collect'>
                        <div className='header'>
                            <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>我的收藏</div>
                            <div className='right'></div>
                        </div>
                        <div className='collectList'>
                            {
                                this.props.mine.collectData &&
                                (this.props.mine.collectData.length !== 0 ? this.props.mine.collectData.map((item, index) => {
                                    return (
                                        <div className='touchClear' key={index}>
                                            <div className='test'>
                                                <div className='collectItem onePx_bottom'>
                                                    <img src='http://yanxuan.nosdn.127.net/fd7920a2eadd10fa10c0c03959a2abe0.png' className='collectImg' />
                                                    <div className='collectMsg'>
                                                        <div>简约知性系列居家地毯 蓝灰格</div>
                                                        <div>沉稳双拼色 居家温柔伴护</div>
                                                        <div>￥599元</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='colse'>删除</div>
                                        </div>)
                                }) : <div style={{textAlign:'center',paddingTop:'2rem'}}>您还没有添加收藏</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collect
