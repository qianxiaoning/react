import React, { Component } from 'react';
import hoc from 'utils/hoc';

class HocPra extends Component{
    constructor(props){
        super(props);
        this.rootThis = this.props.rootThis;
        this.state = {
        }
    }
    funA(){
        console.log('本方法');
    }    
    render(){
        return (
            <div className='HocPra'>
                <h3>Hoc高阶组件</h3>  
                <button onClick={()=>this.funA()}>调用本方法</button>
                <br/>
                <button onClick={()=>this.rootThis.showLog()}>调用公共方法</button>
            </div>
        )
    }
}

export default hoc(HocPra);