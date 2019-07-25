import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main'
import './fonts/iconfont.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index'

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <Switch>
                <Route path='/main' component={Main}></Route>
                <Redirect to="/main"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
