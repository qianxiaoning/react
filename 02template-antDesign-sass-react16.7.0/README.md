### template-antDesign-sass-react16.7.0
- 目录结构
```
build/ 生成目录
public/ 静态资源目录，create-react-app会直接把这里的东西起在服务根目录
src/
    assets/ 资源文件夹，如图片
    components/ 组件
        ReactSlotPra 弹窗组件，引用父组件传入的slot数据
        ReduxSon redux的修改
        Son 事件总线的发射
    config/ 参数文件夹
    pages/ 页面文件夹
        Home 1.react中input的写法
             2.react中组件slot的实现方式
        News react中组件slot的实现方式
        Product 嵌套路由的实现
        ParentSonTransmit 1.父子通讯的方式
                          2.事件总线的监听与销毁
        ReduxExperience redux的引用
        HocPra 使用hoc高阶组件的公共方法
        HttpPra 1.axios请求试验
                2.引入antd库
    redux/ redux文件夹
    router/ router配置
    structures/ 结构组件
    utils/
        events.js 事件总线模块
        hoc.js hoc高阶组件（也可以写一些公共的东西，用来替代mixins）
        http.js http请求和antd的loading，message的结合封装
        urls.js 接口地址的统一管理
        utils.js 公共方法，工具函数
    AppNote.js 笔记文件
    index.js 入口文件
    index.scss 公共样式
config-overrides.js customize-cra对create-react-app的webpack的可配置，如为了antd配置了babel-plugin-import
jsconfig.json create-react-app的配置文件，现在只配了项目资源可以绝对路径
package.json proxy设置的地方
```
---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
