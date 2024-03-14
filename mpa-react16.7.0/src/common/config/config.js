// 常用参数
const host_dev = '/api';// 开发以'/'本地localhost发起
const host_prod = 'http://a.cloud.cn/api';
// 根据 process.env.NODE_ENV 判断 开发或生产接口地址
const host = process.env.NODE_ENV === 'development' ? host_dev : host_prod;

const params = {
    host
};
export default params;
