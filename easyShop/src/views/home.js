import React from 'react'
import {inject,observer} from 'mobx-react'
@inject('home')
@observer

class Home extends React.Component {
    render() {
       return (
           <div>
              home
           </div>  
       )
    }
}
export default Home;