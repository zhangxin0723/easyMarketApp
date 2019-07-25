import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './index.scss'

@inject('home')
@observer

class Home extends Component {
    componentDidMount() {
        this.props.home.getHomeData()
    }
    render() {
        console.log(this.props)
        return (
            <div className="home">
                <div className="home_banner">

                </div>
                首页
            </div>
        )
    }
}
export default Home
