import React, { Component } from 'react';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom';
import './product.scss';
import NoMatch from '../NoMatch/NoMatch.js';

class Product extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <BrowserRouter basename='/product'>
                <div className='productWrap'>
                    <div className='nav'>
                        <NavLink to='/' activeClassName="on" exact>老产品</NavLink>
                        <NavLink to='/productNew' activeClassName="on">新产品</NavLink>
                    </div> 
                    <Switch>
                        {this.props.routes.map((item,index)=>{
                            return <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
                        })}
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Product;