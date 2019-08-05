import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('home', 'catelog')
@observer


class Catelog extends Component {
    componentDidMount() {
        this.props.home.getNav({ id: 1005000 })
        this.props.catelog.getCatelog({ id: 1005000 })
        this.props.catelog.getCount()
        lazyLoad(this.refs.load)
    }
    state = {
        ind: 0
    }
    change(ind, id) {
        this.setState({ ind })
        this.props.catelog.getCatelog({ id })
    }
    render() {
        return (
            <div className='App' ref='load'>
                <div className='tabPageContent'>
                    <div className='searchWrap' onClick={()=>{this.props.history.push('/goodSearch')}}>
                        <div className='searchInput'>
                            <span>搜索商品，共{this.props.catelog.goodsCount && this.props.catelog.goodsCount}款好物</span>
                        </div>
                    </div>
                    <div id='tabsWrap'>
                        {
                            this.props.home.navData && this.props.home.navData.brotherCategory.map((item, index) => {
                                return <p key={item.id} className={index === this.state.ind ? "active" : ''} onClick={() => { this.change(index, item.id) }}>{item.name}</p>
                            })
                        }
                    </div>
                    <div className='categogContet'>
                        <div className='categoryWrap'>
                            <img src={this.props.catelog.catelogData && this.props.catelog.catelogData.banner_url} alt='' />
                            {this.props.catelog.catelogData && this.props.catelog.catelogData.front_name}
                        </div>
                        <div className='categoryTitle'>
                            <div></div>
                            居家分类
                            <div></div>
                        </div>
                        <div className='subCategory'>
                            {
                                this.props.catelog.catelogData && this.props.catelog.catelogData.subCategoryList.map(item => {
                                    return (<NavLink className='subCategoryItem' key={item.id} to={`/categorys/${item.id}`}>
                                         <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.wap_banner_url} alt='' />
                                        {/* <img src={item.wap_banner_url} alt='' /> */}
                                        <div className='subCategoryItemName'>{item.name}</div>
                                    </NavLink>)
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Catelog
