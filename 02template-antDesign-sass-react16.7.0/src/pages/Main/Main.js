import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Product extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <div>product组件</div>
                <Link to='/product/'>产品列表</Link>
                <Link to='/product/add'>新增产品</Link>
                <div>
                    {this.props.routes.map((item,index)=>{
                        return <Route exact={item.exact} path={item.path} component={item.component} />
                    })}
                </div>
            </div>
        )
    }
}

export default Product