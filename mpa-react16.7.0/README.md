### mpa-react16.7.0
- 实现目的：
```
react mpa脚手架
在一个项目里，有多个大模块（二级目录），这些二级目录也可以单独抽离使用，方便日后重新自由组合，迎合其它项目需求。
```
- 总体理念
```
1.react-router: 每个模块间没用路由，纯html跳转，模块中也没用路由，每个模块是比较简单的模块。如果比较复杂，每个模块中单独引入路由。
2.redux: 由于redux也比较复杂笨重，如果某个模块确实需要再做引入，一般轻量需求用事件总线完成。
3.common是公共目录，modules是各模块目录，modules目录下就是打包的多页面。
4.模块写法参照模块a，模块b简写了。
5.各模块的共同资源引入方式，采用的是合并到一个js一起引入。没有用继承的方式，因为官网推荐组合而不是继承。
```
- 目录结构
```
build/ webpack配置目录
dist/ 生成目录
dll/ dll资源目录
src/
    common/ 公共目录
        assets/ 资源文件夹，如图片
        components/ 组件
        config/ 参数文件夹
        locales/ 全局国际化语言对象
        utils/
            common.js 模块公共引入资源
            events.js 事件总线模块
            hoc.js hoc高阶组件（也可以写一些公共的东西，用来替代mixins）
            http.js http请求和antd的loading，message的结合封装
            lang.js 国际化方法
            utils.js 公共方法，工具函数
        global.less 公共样式
    modules/ 模块目录
        a/
            locales/ 模块a的国际化对象
            index.js 模块a的入口函数 兼 主页面组件
            index.less 模块a样式
            urls.js 模块a接口路径
        b/
            ...
static/ 静态资源
.babelrc babel配置文件
.eslintrc.js eslint配置文件
fav.ico ico
index.ejs webpack HtmlWebpackPlugin模板
postcss.config.js postcss配置文件
```
