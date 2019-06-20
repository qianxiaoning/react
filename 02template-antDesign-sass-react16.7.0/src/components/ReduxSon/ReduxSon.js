import React, { Component } from 'react';
import './ReduxSon.scss';

class ReduxSon extends Component{
    constructor(props){
        super(props);
        this.flag = true;
        this.state = {
        }
    }
    changeValue(){
        // console.log(1);
        // console.log(this.props.actions);
        const actions = this.props.actions;
        this.flag = !this.flag;
        const bj = {
            userId:'abc',
            city:'北京'
        };
        const nj = {
            userId:'123',
            city:'南京'
        };
        actions.login(this.flag?bj:nj);
    }
    render(){
        return (
            <div onClick={()=>this.changeValue()} className='changeReduxBtn'>修改state值</div>
        )
    }
}

export default ReduxSon;