import React, { Component } from 'react';
// 路由
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';

import routes from 'router/index' 
import './navAndMain.scss';
import NoMatch from 'pages/NoMatch/NoMatch.js';
// loading
import { Spin } from 'antd';
import eventEmitter from 'utils/events'; 

class NavAndMain extends Component {  
  constructor(props){
    super(props);
    this.state = {
      navArray:[
        {to:'/',exact:true,name:'首页'},
        {to:'/news',exact:false,name:'新闻'},
        {to:'/product',exact:false,name:'产品'},
        {to:'/ParentSonTransmit',exact:false,name:'父子通讯'},
        {to:'/ReduxExperience',exact:false,name:'redux体验'},
        {to:'/HOCPra',exact:false,name:'hoc高阶组件'},
        {to:'/HttpPra',exact:false,name:'axios数据请求'}
      ],
      spinStatus:false
    }
  }
  componentDidMount(){
    // 接收loading
    eventEmitter.on('spin',(msg)=>{
      this.setState({
        spinStatus:msg
      });
    });
  }
  render() {
    return (
      <BrowserRouter>
        {/* <Router>中所有内容得有一个根标签<div> */}
        <div className='rootWrap'>
          <Spin spinning={this.state.spinStatus} wrapperClassName='spinWrapper' tip='加载中...'>
            <header>
              {this.state.navArray.map((item)=>{
                return <NavLink to={item.to} activeClassName="on" exact={item.exact} key={item.to}>{item.name}</NavLink>
              })}            
            </header>
            <Switch>
              {
                  routes.map((item,index)=>{
                  return <Route key={item.path} exact={item.exact} path={item.path} render={props=>(
                      <item.component {...props} routes={item.routes} />
                  )}></Route>
                  })
              }
              <Route component={NoMatch}></Route>
            </Switch>
          </Spin>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavAndMain;
