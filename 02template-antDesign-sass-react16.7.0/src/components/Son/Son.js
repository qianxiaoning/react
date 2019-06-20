import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'components/Son/son.scss';
import eventEmitter from 'utils/events';

class Son extends Component{
    constructor(props){
        super(props);
        this.state = {
            sonValue:1,
            emitObj:{
                a:1,
                b:2
            }
        }
    }
    showSonValue(e){
        //保留原生事件
        // e.persist();
        // console.log(e);
        // console.log(this.state.sonValue);
    }
    render(){
        return (
            <ul className='sonWrap' onClick={(e)=>this.showSonValue(e)}>
                {
                    this.props.listData.map((item,index)=>{
                        return (
                            <li key={item.id} onClick={()=>this.props.parentFun(item.name)}>{item.name}</li>
                        )
                    })
                }             
                {/* 事件总线 */}
                <button onClick={()=>{eventEmitter.emit('message',this.state.emitObj)}}>事件总线发射器</button>   
            </ul>
        )
    }
}

Son.propTypes = {
    listData: PropTypes.array,
    parentFun: PropTypes.func
};
Son.defaultProps = {
    listData: [],
    parentFun:function(){}
};

export default Son;