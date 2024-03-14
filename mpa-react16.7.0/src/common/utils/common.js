// 公共样式
import '@/global.less';
// 常用参数
import config from '@/config/config';
// 公共方法
import utils from './utils';
// 事件总线
import events from './events';
// http
import http from './http';
// 国际化
import zhCN from 'antd/lib/locale-provider/zh_CN';
// 国际化方法
import { LocaleProvider } from 'antd';
import { $tWrapper, $t } from './lang';

export default {
    config,
    utils,
    events,
    http,
    LocaleProvider,
    zhCN,
    $tWrapper,
    $t
};
