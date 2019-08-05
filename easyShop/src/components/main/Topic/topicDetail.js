import React, { Component } from 'react'
import '../../../fonts/iconfont.css'
import './topicDetail.scss'
import { inject , observer} from 'mobx-react'
import { NavLink } from 'react-router-dom'
@inject('topic')
@observer
class TopicDetail extends Component {
    state = {
        page:1,
        size:5
    }
    goback() {
        this.props.history.go(-1)
    }
    componentDidMount() {
        let id = this.props.match.params.id.slice(1).split('=')[1]
        let obj = {
            valueId:id,
            typeId:1,
            page:this.state.page,
            size:this.state.size
        }
        this.props.topic.getCommentList(obj)
    }
    //点击跳留言
    commentWrite() {
        let id = this.props.match.params.id.slice(1).split('=')[1]
        this.props.history.push(`/commentWrite/${id}`)
    }
    render() {
        let id = this.props.match.params.id.slice(1).split('=')[1]
        return (
            <div className='topicDetail_wrap'>
                <header className="header">
                    <div className='header_left' onClick={() => {this.goback()}}> 
                        <span>
                            <i className='iconfont icon-xiangzuo'></i>
                        </span>
                    </div>
                    <span>{this.props.topic.mytopicDetail.title}</span>
                </header>
                <section className="main">
                     <div className='main_img'>
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg' alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg' alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg' alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg' alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src="//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg' alt='' />
                     <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg' alt='' />
                     </div>
                     <div className='main_comment'>
                         <div className='main_wrap_comment'>
                             <span>精选留言</span>
                             <div className='iconfonts' onClick={() => this.commentWrite()}>
                                <i className='iconfont icon-24'></i>
                             </div>
                         </div>
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
                        <NavLink to={`/comment/${id}?typeId=1`} className='moreComment'>查看更多评论</NavLink>
                     </div>
                     <div className='main_recommend'>
                         <div className='crecomment_special'>推荐专题</div>
                         <div className='crecomment_special_img'>
                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='https://yanxuan.nosdn.127.net/14943267735961674.jpg' alt='' />
                             <div>关爱他成长的每一个足迹</div>
                         </div>
                         <div className='crecomment_special_img'>
                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src='https://yanxuan.nosdn.127.net/14942996754171334.jpg' alt='' />
                             <div>一次解决5个节日送礼难题</div>
                         </div>
                         <div className='crecomment_special_img'>
                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src="https://yanxuan.nosdn.127.net/14939843143621089.jpg" alt='' />
                             <div>秒杀化学洗涤剂的纯天然皂</div>
                         </div>
                         <div className='crecomment_special_img'>
                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src="https://yanxuan.nosdn.127.net/14938873919030679.jpg" alt='' />
                             <div>买过的人都说它是差旅神器</div>
                         </div>
                     </div>
                </section>
            </div>
        )
    }
}
export default TopicDetail