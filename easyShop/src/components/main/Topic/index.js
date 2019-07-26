import React, { Component } from 'react'
import './topic.scss'
import { inject , observer} from 'mobx-react'
@inject('topic')
@observer
class Topic extends Component {
    componentDidMount() {
        this.props.topic.getTopicData()
        this.props.topic.getTopicDetail()
    }
    topicDetail(id) {
        this.props.topic.getTopicDetail(id)
        this.props.history.push({pathname:`/topicDetail/?id=${id}`})
    }
    render() {
        console.log(this.props.topic.mytopicDetail)
        return (
            <div className='topic_wrap'>
                {
                    this.props.topic.mytopic.data && this.props.topic.mytopic.data.map(item => {
                            return  <div className='topic_cont' key={item.id} 
                                onClick={() => this.topicDetail(item.id)}
                            >
                                        <img src={item.scene_pic_url} alt=""/>
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