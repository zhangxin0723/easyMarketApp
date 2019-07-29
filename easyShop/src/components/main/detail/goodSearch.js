import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './goods.scss'

@inject('search')
@observer

class goodSearch extends Component {
    componentDidMount() {
        this.props.search.getSearch()
        this.props.search.searchFuzzy({keyword:'日式'})
    }
    render() {
        console.log(this.props)
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
                                    <input type='text' className='searchInput' placeholder={this.props.search.searchData && this.props.search.searchData.defaultKeyword.keyword} />
                                    <div className='cancelSearch'>取消</div>
                                </div>
                            </div>
                        </div>
                        <div className='searchMsg'>
                            <div className='searchItemWrap'>
                                <div className='title'>历史记录 <i className='iconfont icon-lajitong' onClick={()=>{this.props.search.delSearch()}}></i></div>
                                <div className='listWrap'>
                                    {
                                        this.props.search.searchData && this.props.search.searchData.historyKeywordList.map((item,index)=>{
                                            return <button className='listItem' key={index}>{item}</button>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='searchItemWrap'>
                                <div className='title'>热门搜索</div>
                                <div className='listWrap'>
                                    {
                                        this.props.search.searchData && this.props.search.searchData.hotKeywordList.map((item,index)=>{
                                            return <button className='listItem' key={index} style={item.is_hot===1?{borderColor:'#f00',color:'#f00'}:{}}>{item.keyword}</button>
                                        })
                                    }
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
