import React, { Component } from 'react';
// 路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import routes from './router/index' 
class App extends Component {  
  render() {
    return (
      <Router>
        {/* <Router>中所有内容得有一个根标签<div> */}
        <div className='rootWrap'>
          <header>
            <Link to='/'>首页</Link>
            <Link to='/news'>新闻</Link>
            <Link to='/product'>产品</Link>
          </header>
          {
            routes.map((item,index)=>{
              return <Route key={item.path} exact={item.exact} path={item.path} render={props=>(
                <item.component {...props} routes={item.routes} />
              )}></Route>
            })
          }
          11
        </div>
      </Router>
    );
  }
}

export default App;
