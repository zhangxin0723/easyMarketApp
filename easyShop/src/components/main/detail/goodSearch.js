import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './goods.scss'

@inject('search')
@observer

class goodSearch extends Component {
    state={
        flag:true,
        show:false,
        active:1,
        order:'desc'
    }
    componentDidMount() {
        this.props.search.getSearch()
    }
    fuzzySearch(e) {
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code === 13) {
            let val = this.refs.ipt.value;
            this.props.search.searchFuzzy({ keyword: val })
            this.setState({
                flag:!this.state.flag
            })
        }
    }
    change(){
        this.setState({
            show:!this.state.show,
            active:3
        })
    }
    changeActive(i){
        let val = this.refs.ipt.value;
        this.setState({
            active:i,
            order:this.state.order==='desc'?'asc':"desc"
        })
        console.log(this.state.order)
        if(i===1){
            this.props.search.searchFuzzy({ keyword: val })
        }else if(i===2){
            this.props.search.searchFuzzy({ keyword: val ,order:this.state.order,sort:'price'})
        }
    }
    render() {
        console.log(this.props)
        let {flag,show,active}=this.state;
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
                                    <input type='text' className='searchInput' placeholder={this.props.search.searchData && this.props.search.searchData.defaultKeyword.keyword}
                                        onKeyDown={(e) => { this.fuzzySearch(e) }} ref='ipt' />
                                    <div className='cancelSearch'>取消</div>
                                </div>
                            </div>
                        </div>
                        {flag===true?<div className='searchMsg'>
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
                        </div>:
                        <div className='searchGoods'>
                            <div className='searchConditionWrap'>
                                <div className='searchCondition'>
                                    <div className={active===1?'active':''} onClick={()=>{this.changeActive(1)}}>综合</div>
                                    <div className={active===2?'active':''} onClick={()=>{this.changeActive(2)}}>价格</div>
                                    <div className={active===3?'active chooseCategory':'chooseCategory'} onClick={()=>{this.change()}}>居家分类</div>
                                </div>
                                {show===true?<div className='searchConditionCategoryWrap'>
                                    {
                                        this.props.search.filterData && this.props.search.filterData.filterCategory.map(item=>{
                                            return (<button className='categoryListItem' key={item.id}>{item.name}</button>)
                                        })
                                    } 
                                </div>:null}
                            </div>
                            <div className='goodsList'>
                                {
                                    this.props.search.filterData && this.props.search.filterData.data.map(item => {
                                        return (<a className='goodsItem' key={item.id} href={`/goods/${item.id}`}>
                                            <div className='goodsItemImg'>
                                                <img src={item.list_pic_url} />
                                            </div>
                                            <div className='goodsItemName'>{item.name}</div>
                                            <div className='goodsItemPrice'>￥{item.retail_price}元</div>
                                        </a>)
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
