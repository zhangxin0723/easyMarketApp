import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ListItem from './listItem'
import './index.scss'

@inject('mine')
@observer

class Collect extends Component {
    componentDidMount() {
        this.props.mine.getCollect({ typeId: 1 })
    }
    render() {
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
                                        <ListItem key={index} {...item} />
                                    )
                                }) : <div style={{ textAlign: 'center', paddingTop: '2rem' }}>您还没有添加收藏</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collect
