import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './index.scss'
import { NavLink } from 'react-router-dom'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('home')
@observer

class Categorys extends Component {
    componentDidMount() {
        this.props.home.getCatelog({ categoryId: this.props.match.params.id })
        this.props.home.getNav({ id: this.props.match.params.id })
        lazyLoad(this.refs.load)
    }
    change(tab) {
        let id = this.props.home.navData.brotherCategory[tab.index].id;
        this.props.home.getCatelog({ categoryId: id })
        this.props.home.getNav({ id: id })
    }

    render() {
        if (!this.props.home.catalog) {
            return null
        }
        if (!this.props.home.navData) {
            return null
        }
        const tabs = this.props.home.navData.brotherCategory.map(item => {
            return { title: item.name }
        })
        let { goodsList } = this.props.home.catalog;
        //初始化nav
        let initialPage = this.props.home.navData.brotherCategory.findIndex(item => {
            return item.id === this.props.match.params.id*1;
        })
        return (
            <div className='App' ref='load'>
                <div className='noTabPageContent'>
                    <div className='header'>
                        <div className='left' onClick={()=>{this.props.history.goBack()}}><i className='iconfont icon-angle-left'></i></div>
                        <div className='title'>奇趣分类</div>
                        <div className='right'></div>
                    </div>
                    <div className='tabWrap'>
                        <WhiteSpace />
                        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />} initialPage={initialPage} onTabClick={(tab, index) => { this.change({ tab, index }) }}>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                    <div className='categoryDetail'>
                        <div>{this.props.home.navData.currentCategory.name}</div>
                        <div>{this.props.home.navData.currentCategory.front_desc}</div>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsList'>
                            {
                                goodsList.map(item => {
                                    return (<NavLink className='goodsItem' key={item.id} to={`/goods/${item.id}`}>
                                        <div className='goodsItemImg'>
                                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.list_pic_url} alt='' />
                                            {/* <img src={item.list_pic_url} alt='' /> */}
                                        </div>
                                        <div className='goodsItemName'>{item.name}</div>
                                        <div className='goodsItemPrice'>￥{item.retail_price}元</div>
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

export default Categorys
