import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './comment.scss'
@inject('topic')
@observer
class Comment extends Component {
    goback() {
        this.props.history.go(-1)
    }
    componentDidMount() {
        let flag = this.props.location.search.slice(1).split('=')[1]
        let id = this.props.match.params.id
        console.log(flag)
        let obj = {
            valueId: id,
            typeId: Number(flag),
        }
        if (flag === '1') {
            this.props.topic.getCommentList(obj)
        } else if (flag === '0') {
            this.props.topic.getCommentList(obj)
        }
    }
    render() {
        let flag = this.props.location.search.slice(1).split('=')[1]
        return (
            <div className='comment_wrap'>
                <div className='noTabPageContent'>
                    <header className="header">
                        <div className='header_left' onClick={() => { this.goback() }}>
                            <a href="javascript:;">
                                <i className='iconfont icon-xiangzuo'></i>
                            </a>
                        </div>
                        <span>查看更多评论</span>
                        <div className='header_left'></div>
                    </header>
                    <section className="main">
                        {flag === '1' ? this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.map(item => {
                            return <div className='main_wrap_comment_cont' key={item.id}>
                                <div className='userInfo'>
                                    <div>{item.user_info.name ? item.user_info.name : "匿名用户"}</div>
                                    <div>{item.add_time}</div>
                                </div>
                                <div className='user_cont'>{item.content}</div>
                                <div className='user_parting'></div>
                            </div>
                        }) : <div className='commentList'>
                                {
                                    this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.map(item => {
                                        return (<div className='commentItem' key={item.id + 'id'}>
                                            <div className='userInfo'>
                                                <div>{item.user_info.name ? item.user_info.name : "匿名用户"}</div>
                                                <div>{item.add_time}</div>
                                            </div>
                                            <div className='userComment'>{item.content}</div>
                                            <div className='commentPicList'>
                                                {
                                                    item.pic_list.length !== 0 ? item.pic_list.map(val => {
                                                        return <img src={val.pic_url} key={val.comment_id}  alt=''/>
                                                    }) : null
                                                }
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>}
                    </section>
                </div>
            </div>
        )
    }
}
export default Comment