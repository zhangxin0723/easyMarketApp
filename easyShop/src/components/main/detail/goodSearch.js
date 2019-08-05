import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './goods.scss'
import { NavLink } from 'react-router-dom'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('search')
@observer

class goodSearch extends Component {
    state = {
        flag: true,
        show: false,
        active: 1,
        order: 'desc',
        ind: 0
    }
    componentDidMount() {
        this.props.search.getSearch()
        lazyLoad(this.refs.load)
    }
    fuzzySearch(e) {
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code === 13) {
            let val = this.refs.ipt.value;
            this.props.search.searchFuzzy({ keyword: val })
            this.setState({
                flag: !this.state.flag
            })
        }
    }
    change() {
        this.setState({
            show: !this.state.show,
            active: 3
        })
    }
    changeActive(i) {
        let val = this.refs.ipt.value;
        this.setState({
            active: i,
            order: this.state.order === 'desc' ? 'asc' : "desc"
        })
        if (i === 1) {
            this.props.search.searchFuzzy({ keyword: val })
        } else if (i === 2) {
            this.props.search.searchFuzzy({ keyword: val, order: this.state.order, sort: 'price' })
        }
    }
    btn(index, item) {
        this.setState({
            ind: index
        })
        this.props.search.searchFuzzy({ keyword:this.refs.ipt.value, categoryId: item.id, order: this.state.order, sort: 'price' })
    }
    render() {
        let { flag, show, active, ind ,order} = this.state;
        return (
            <div className='App' ref='load'>
                <div className='noTabPageContent'>
                    <div className='searchPage'>
                        <div className='searchFix'>
                            <div className='Input'>
                                <div className='searchInputWrap'>
                                    <div className='goBack' onClick={()=>{this.props.history.goBack()}}>
                                        <i className='iconfont icon-angle-left'></i>
                                    </div>
                                    <div className='icon'>
                                        <i className='iconfont icon-fangdajing'></i>
                                    </div>
                                    <input type='text' className='searchInput' placeholder={this.props.search.searchData && this.props.search.searchData.defaultKeyword.keyword}
                                        onKeyDown={(e) => { this.fuzzySearch(e) }} ref='ipt' />
                                    <div className='cancelSearch'>取消</div>
                                </div>
                            </div>
                        </div>
                        {flag === true ? <div className='searchMsg'>
                            <div className='searchItemWrap'>
                                <div className='title'>历史记录 <i className='iconfont icon-lajitong' onClick={() => { this.props.search.delSearch() }}></i></div>
                                <div className='listWrap'>
                                    {
                                        this.props.search.searchData && this.props.search.searchData.historyKeywordList.map((item, index) => {
                                            return <button className='listItem' key={index}>{item}</button>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='searchItemWrap'>
                                <div className='title'>热门搜索</div>
                                <div className='listWrap'>
                                    {
                                        this.props.search.searchData && this.props.search.searchData.hotKeywordList.map((item, index) => {
                                            return <button className='listItem' key={index} style={item.is_hot === 1 ? { borderColor: '#f00', color: '#f00' } : {}}>{item.keyword}</button>
                                        })
                                    }
                                </div>
                            </div>
                        </div> :
                            <div className='searchGoods'>
                                <div className='searchConditionWrap'>
                                    <div className='searchCondition'>
                                        <div className={active === 1 ? 'active' : ''} onClick={() => { this.changeActive(1) }}>综合</div>
                                        <div className={active === 2 ? 'active' : ''} onClick={() => { this.changeActive(2) }}>价格{order==="desc"?"(降)":"(升)"}</div>
                                        <div className={active === 3 ? 'active chooseCategory' : 'chooseCategory'} onClick={() => { this.change() }}>居家分类</div>
                                    </div>
                                    {show === true ? <div className='searchConditionCategoryWrap'>
                                        {
                                            this.props.search.filterData && this.props.search.filterData.filterCategory.map((item, index) => {
                                                return (<button key={item.id} className={ind === index ? "active categoryListItem" : 'categoryListItem'} onClick={(e) => { this.btn(index, item) }}>{item.name}</button>)
                                            })
                                        }
                                    </div> : null}
                                </div>
                                <div className='goodsList'>
                                    {
                                        this.props.search.filterData && this.props.search.filterData.data.map(item => {
                                            return (<NavLink className='goodsItem' key={item.id} to={`/goods/${item.id}`}>
                                                <div className='goodsItemImg'>
                                                    <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.list_pic_url} alt='' />
                                                    {/* <img src={item.list_pic_url} alt=''/> */}
                                                </div>
                                                <div className='goodsItemName'>{item.name}</div>
                                                <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                            </NavLink>)
                                        })
                                    }
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default goodSearch
