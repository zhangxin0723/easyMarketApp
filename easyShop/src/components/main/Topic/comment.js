import React, { Component } from 'react'
import { inject ,observer } from 'mobx-react'
import './comment.scss'
@inject('topic')
@observer
class Comment extends Component {
    state = {
        page:1,
        size:10
    }
    goback() {
        this.props.history.go(-1)
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let obj = {
            valueId:id,
            typeId:1,
            page:this.state.page,
            size:this.state.size
        }
        this.props.topic.getCommentList(obj)
    }
    render() {
        return (
            <div className='comment_wrap'>
                <header className="header">
                    <div className='header_left' onClick={() => {this.goback()}}> 
                        <a href="javascript:;">
                            <i className='iconfont icon-xiangzuo'></i>
                        </a>
                    </div>
                    <span>查看评论</span>
                    <div className='header_left'> 
                       
                    </div>
                </header>
                <section className="main">
                        {
                            this.props.topic.mytopicComment.data && this.props.topic.mytopicComment.data.map(item => {
                                return <div className='main_wrap_comment_cont' key={item.id}>
                                           <div className='userInfo'>
                                               <div>匿名用户</div>
                                               <div>{item.add_time}</div>
                                           </div>
                                           <div className='user_cont'>{item.content}</div>
                                           <div className='user_parting'></div>
                                       </div>
                            })
                        }
                </section>
            </div>
        )
    }
}
export default Comment