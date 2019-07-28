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
        let obj = {
            content:this.state.values,
            valueId:this.props.location.pathname.slice(1).split('/')[1],
            typeId:1
        }
        this.props.topic.getComment(obj)
    }
    goBack(e) {
       let id = this.props.location.pathname.slice(1).split('/')[1]
       this.props.history.push({pathname:`/topicDetail/?id=${id}`})                  
    }
    render() {
        let id = this.props.location.pathname.slice(1).split('/')[1]
        if(this.props.topic.mytopicComment === 0) {
            alert('添加成功')
            this.props.history.push({pathname:`/topicDetail/?id=${id}`})            
        }
        return (
            <div className='topicCommentWrite_wrap'>
                <header className="header">
                    <div className='header_left' onClick={(e) => {this.goBack(e)}}> 
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
                        <textarea className='comment_write_input' maxLength='80' ref={this.values} onChange={() => {this.changeInput()}}></textarea>
                        <span>{this.state.values.length}/80</span>
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