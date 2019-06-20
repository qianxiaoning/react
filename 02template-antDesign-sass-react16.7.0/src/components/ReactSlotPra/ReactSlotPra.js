import React, { Component } from 'react';
import './ReactSlotPra.scss';

class ReactSlotPra extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        // console.log(this.props.children);
        // console.log(this.props.children[1]);
        return (
            <div className='ReactSlotPra'>
                <h3>这是一个弹窗组件</h3>
                <span>props传dom法：</span>
                <div className='popMain'>{this.props.main}</div>
                <span>this.props.children接收标签中间内容法：</span>
                <div className='popMain'>{this.props.children[1]}</div>
            </div>
        )
    }
}

export default ReactSlotPra;