import config from '@/config/config';

const { host } = config;
const urls = {
    axiosPra: 'axiosPra.json',
    login: `${host}/r/sys/login`
};

export default urls;
