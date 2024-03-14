// 公共部分
import common from '@/utils/common';
// 个体部分
import './index.less';
import urls from './urls';
import React from 'react';
import ReactDOM from 'react-dom';
// 国际化
import zh from './locales/zh-CN';
import en from './locales/en-US';
// 国际化方法
common.$tWrapper(en, zh);
const { $t } = common;
import { Button, DatePicker, Spin } from 'antd';

const { LocaleProvider } = common;
// 小图
import littlePic from '@/assets/littlePic.png';
// 大图
import bigPic from '@/assets/bigPic.png';
// 组件
import ComponentA from '@/components/componentA/componentA';

class A extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a: 1,
            name: 'componentA1',
            lang: localStorage.lang,
            spinStatus: false
        };
    }

    componentDidMount(){
        // 接收loading
        common.events.on('spin', (msg) => {
            this.setState({
                spinStatus: msg
            });
        });
    }

    // bind传参，接收时，事件对象e要放在最后
    langClick(s, e){
        console.log(e);
        e.preventDefault();
        localStorage.lang = s;
        this.setState({
            lang: s
        });
    }

    // http试验
    async axiosPra(){
        const res = await common.http.get(urls.axiosPra);
        console.log(res);
    }

    render() {
        return (
            <div className='moduleA'>
                <LocaleProvider locale={localStorage.lang === 'zh-CN' ? common.zhCN : null} className='xa'>
                    <Spin spinning={this.state.spinStatus} wrapperClassName='spinWrapper' tip={$t('loading')}>
                        <span onClick={this.langClick.bind(this, 'zh-CN')} className='languageBtn'>中文</span>
                        <span onClick={this.langClick.bind(this, 'en-US')} className='languageBtn'>english</span>
                        <div>{$t('tip')}</div>
                        <p className='hidden'>{this.state.lang === 'zh-CN' ? 11 : 22}</p>
                        <DatePicker />
                        <Button type='primary' onClick={() => { this.axiosPra(); }}>Primary</Button>
                        <ComponentA name={this.state.name} />
                        <span>{this.state.a}</span>
                        <img src={littlePic} alt='' />
                        <img src={bigPic} alt='' />
                        <div className='cssImg'></div>
                    </Spin>
                </LocaleProvider>
            </div>
        );
    }
}
ReactDOM.render(
    <A />,
    document.getElementById('moduleRoot')
);
