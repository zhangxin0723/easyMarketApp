import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home'
//引入mobx
import {Provider} from 'mobx-react'
import store from './store/index'
ReactDOM.render(
    <Provider {...store}>
        <Home />
    </Provider>
    , document.getElementById('root'));
