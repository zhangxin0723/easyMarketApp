import React, { Component } from 'react'
import {inject , observer} from 'mobx-react'
import './topicCommentWrite.scss'
@inject('topic')
@observer
class topicCommentWrite extends Component {
    constructor() {
        super() 
        this.values = React.createRef()
    }
    state = {
         flag:false,
         values:''
    }
    changeInput() {
        let values = this.values.current.value
        this.setState({
            flag:true,
            values
        })
        if(values) {
            this.setState({
                flag:true
            })
        } else {
            this.setState({
                flag:false
            })
        }
    }
    myleave() {
        console.log(this.state.values)
        console.log(this.props.myComment())
    }
    render() {
        return (
            <div className='topicCommentWrite_wrap'>
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
                    <div className='comment_write'>
                        <textarea className='comment_write_input' max='80' ref={this.values} onChange={() => {this.changeInput()}}></textarea>
                        <span>0/80</span>
                        <div className='comment_write_buttons'>
                            <div className='write_dele'>{ this.state.flag === true ? <span>清空</span> : ''}</div>
                            <div onClick={() => {this.myleave()}}><span>留言</span></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default topicCommentWrite