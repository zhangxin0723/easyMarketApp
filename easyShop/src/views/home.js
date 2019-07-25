import React from 'react'
import {inject,observer} from 'mobx-react'

@inject('home','count')
@observer

class Home extends React.Component {
    render() {
       return  <div>
                    <button onClick={() => this.props.home.changeCount('+')}>+</button>
                    <span>{this.props.home.count}</span>
                    <button onClick={() => this.props.home.changeCount('-')}>-</button>
                    <button onClick={() => this.props.count.changeTimer()}>开始</button>
                    <span>{this.props.count.timer}</span>
                </div>
    }
}
export default Home;