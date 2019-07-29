import React, { Component } from 'react'
import './goods.scss'

class goodSearch extends Component {
    render() {
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div className='searchPage'>
                        <div className='searchFix'>
                            <div className='Input'>    
                                <div className='searchInputWrap'>
                                    <div className='goBack'>
                                        <i className='iconfont icon-angle-left'></i>
                                    </div>
                                    <div className='icon'>
                                        <i className='iconfont icon-fangdajing'></i>
                                    </div>
                                    <input  type='text' className='searchInput' placeholder='520元礼包抢先领'/>
                                    <div className='cancelSearch'>取消</div>
                                </div>
                            </div>
                        </div>
                        <div className='searchMsg'>
                            <div className='searchItemWrap'>
                                <div className='title'>历史记录 <i className='iconfont icon-lajitong'></i></div>
                                <div className='listWrap'>
                                    <button className='listItem'>墨镜</button>
                                </div>
                            </div>
                            <div className='searchItemWrap'>
                                <div className='title'>热门搜索</div>
                                <div className='listWrap'>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                    <button className='listItem'>墨镜</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default goodSearch
