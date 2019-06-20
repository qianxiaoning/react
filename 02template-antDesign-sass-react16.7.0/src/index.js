// index.js入口文件
// React是react的核心库
// ReactDOM提供与dom相关的功能
import React from 'react';
import ReactDOM from 'react-dom';
// index.css公共css文件
import 'index.scss';
// 外层结构 NavAndMain
import NavAndMain from 'structures/NavAndMain.js';
// 加快react运行速度
import * as serviceWorker from 'serviceWorker';
// redux
import {Provider} from 'react-redux';
import configureStore from 'redux/store/configureStore';
// redux pra
// import 'redux/redux';
ReactDOM.render(
    <Provider store={configureStore()}>
        <NavAndMain />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
