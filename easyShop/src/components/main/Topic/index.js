import React, { Component } from 'react'
import './topic.scss'
import { inject , observer} from 'mobx-react'
//图片懒加载
import lazyLoad from '../../../loadImg'
@inject('topic')
@observer
class Topic extends Component {
    componentDidMount() {
        this.props.topic.getTopicData()
        this.props.topic.getTopicDetail()
        lazyLoad(this.refs.load)
    }
    topicDetail(id) {
        //根据专题Id获取专题详情
        this.props.topic.getTopicDetail(id)
        this.props.history.push({pathname:`/topicDetail/?id=${id}`})
    }
    render() {
        return (
            <div className='topic_wrap' ref='load'>
                {
                    this.props.topic.mytopic.data && this.props.topic.mytopic.data.map(item => {
                            return  <div className='topic_cont' key={item.id} 
                                onClick={() => this.topicDetail(item.id)}
                            >
                                            <img src='https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg' data-src={item.scene_pic_url} alt='' />
                                        {/* <img src={item.scene_pic_url} alt=""/> */}
                                        <div className='topice_title'>{item.title}</div>
                                        <div className='topice_center'>{item.subtitle}</div>
                                           <div className='topic_price'>
                                            {item.price_info}元起
                                        </div>
                                    </div> 
                    })
                }
            </div>
        )
    }
}
export default Topic