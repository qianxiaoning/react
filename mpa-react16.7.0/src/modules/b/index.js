/* eslint-disable */
require('./dao.js');

import './index.less';
import '@/global.less';
import React from 'react';
import ReactDOM from 'react-dom';
// 国际化
// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// 组件
// import ComponentA from '@/components/componentA/componentA';
const pDom = document.createElement('p');
pDom.innerHTML = '11111';
document.querySelector('#moduleRoot').appendChild(pDom);

class B extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            b: 2
        };
    }

    render() {
        return (
            <div>
                {this.state.b}
            </div>
        );
    }
}
// ReactDOM.render(<LocaleProvider locale={localStorage.lang === 'zh-CN' ? zhCN : null}><B /></LocaleProvider>, document.getElementById('moduleRoot'));
ReactDOM.render(<B />, document.getElementById('moduleRoot'));
// ReactDOM.render(<div>111</div>, document.getElementById('moduleRoot'));
/* eslint-enable */
