import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import "./index.scss"

@inject('home', 'catelog')
@observer


class Catelog extends Component {
    componentDidMount() {
        this.props.home.getNav({ id: 1005000 })
        this.props.catelog.getCatelog({ id: 1005000 })
    }
    state = {
        ind: 0
    }
    change(ind, id) {
        this.setState({ ind })
        this.props.catelog.getCatelog({ id })
    }
    render() {
        console.log(this.props)
        return (
            <div className='App'>
                <div className='tabPageContent'>
                    <div className='searchWrap'>
                        <div className='searchInput'>
                            <span>搜索商品，共239款好物</span>
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
                            <img src={this.props.catelog.catelogData && this.props.catelog.catelogData.banner_url} />
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
                                    return (<a className='subCategoryItem' key={item.id}>
                                        <img src={item.wap_banner_url} />
                                        <div className='subCategoryItemName'>{item.name}</div>
                                    </a>)
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
