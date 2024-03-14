import axios from 'axios';
// 引用antd的loading和提示框
// spin message
import { message } from 'antd';
import eventEmitter from './events';

const loadingDelay = () => {
    setTimeout(() => {
        eventEmitter.emit('spin', false);
    }, 300);
};
const messageTime = (txt) => {
    message.error(txt, 3);
};

// 配置axios实例
const instanceAxios = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
        // token:localStorage.token
    },
    timeout: '2000',
    // 跨域请求是否需要凭证 是否带上cookie
    withCredentials: true
    // baseURL:url
});

// 请求拦截器
instanceAxios.interceptors.request.use(
    (config) => {
        // 发送请求之前
        // loading
        eventEmitter.emit('spin', true);
        return config;
    },
    // 请求错误
    (error) => {
        // loading 停止
        loadingDelay();
        // 弹窗 网络异常
        messageTime('网络异常');
        return Promise.reject(error);
    },
);
// 响应拦截器
instanceAxios.interceptors.response.use(
    (response) => {
        // 响应数据
        // loading停止
        loadingDelay();
        // 测试
        if(response.config.url === 'axiosPra.json'){
            return response;
        }
        const res = response.data;
        if (res.code === 200) {
            return res;
        }
        if (res.code === 302) {
            messageTime('账号已掉线，请重新登录');
            return Promise.reject(response);
        }
        return undefined;
    },
    (error) => {
        // loading停止
        loadingDelay();
        // 弹出错误
        messageTime(error);
        return Promise.reject(error);
    }
);

// POST新增 DELETE删除 PUT更新 GET查询
const http = {
    post(url, params) {
        return instanceAxios.post(url, params).then((res) => {
            return res;
        });
    },
    delete(url, params) {
        return instanceAxios.delete(url, { data: params }).then((res) => {
            return res;
        });
    },
    put(url, params) {
        return instanceAxios.put(url, params).then((res) => {
            return res;
        });
    },
    get(url, params) {
        return instanceAxios.get(url, { params }).then((res) => {
            return res;
        });
    }
};

export default http;
