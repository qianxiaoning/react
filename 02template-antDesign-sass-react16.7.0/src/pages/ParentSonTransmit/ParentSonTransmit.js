import React, { Component } from 'react';
import Son from 'components/Son/Son.js';

class ParentSonTransmit extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData: [
                {
                    id:1,
                    name:'可乐'
                },
                {
                    id:2,
                    name:'雪碧'
                },
                {
                    id:3,
                    name:'芬达'
                }
            ],
            sonLike:''
        }
    }
    subLikeShow(name){
        console.log(name);
        this.setState({
            sonLike:name
        });
    }
    render(){
        return (
            <div>
                <h3>此为父页面，父页面传入this.state.listData给子</h3>
                <p>下面为子组件列表：</p>  
                <Son listData={this.state.listData} parentFun={(name)=>this.subLikeShow(name)}></Son>
                <p>子组件喜欢：{this.state.sonLike}</p>
            </div>            
        )
    }
}

export default ParentSonTransmit;