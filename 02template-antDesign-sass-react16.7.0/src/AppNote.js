// 这是笔记文件
import React, { Component } from 'react';
// 路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Product from './components/Product';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:1
    }
  }
  render() {
    return (
      <Router>
        {/* <Router>中所有内容得有一个根标签<div> */}
        <div>
          <header>
            <Link to='/'>home</Link>
            {/* 路由传值1 */}
            <Link to={`/news/${this.state.id}`}>news</Link>
            {/* 在News组件的componentDidMount中，通过this.props.match.params.id获取 */}
            {/* 路由传值2 */}
            <Link to={`/product/?id=${this.state.id}`}>product</Link>
            {/* 在Product组件的componentDidMount中，通过this.props.location.search获取'?id=1'，还要进一步解析 */}
          </header>
          

          {/* exact严格匹配，否则如'/news'也会匹配上首页 */}
          <Route exact path='/' component={Home}/>
          {/* 路由传值1 */}
          <Route path='/news/:id?' component={News}/>
          <Route path='/product' component={Product}/>
          {/* 子路由也是在子组件里写<Route/>就行了 */}
        </div>
      </Router>
    );
  }
}

export default App;
