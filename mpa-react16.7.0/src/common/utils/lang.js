let en = {};
let zh = {};
const $tWrapper = (enReal, zhReal) => {
    en = enReal;
    zh = zhReal;
};

const $t = (id) => {
    const storageLang = localStorage.lang;
    const lang = storageLang === 'zh-CN' ? 'zh-CN' : 'en-US';
    let langObj = en;
    if(lang === 'en-US'){
        langObj = en;
    }else if(lang === 'zh-CN'){
        langObj = zh;
    }
    return langObj[id];
};

export {
    $tWrapper,
    $t
};
