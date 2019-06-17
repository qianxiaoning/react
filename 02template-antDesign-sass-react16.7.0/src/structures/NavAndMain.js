import React, { Component } from 'react';
// 路由
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';

import routes from '../router/index' 
import './navAndMain.scss';
import NoMatch from '../pages/NoMatch/NoMatch.js';

class NavAndMain extends Component {  
  render() {
    return (
      <BrowserRouter>
        {/* <Router>中所有内容得有一个根标签<div> */}
        <div className='rootWrap'>
          <header>
            <NavLink to='/' activeClassName="on" exact>首页</NavLink>
            <NavLink to='/news' activeClassName="on">新闻</NavLink>
            <NavLink to='/product' activeClassName="on">产品</NavLink>
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
        </div>
      </BrowserRouter>
    );
  }
}

export default NavAndMain;
