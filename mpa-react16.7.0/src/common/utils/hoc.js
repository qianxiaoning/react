import React, { Component } from 'react';

// 高阶组件函数
// 相比普通组件，高阶组件是将组件转换为另一个组件

const hoc = (RenderComponent) => {
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
            };
        }

        // 生命周期
        componentDidMount(){
        }

        componentWillUnmount(){}

        handleChange(){}

        // 公共方法
        showLog(){
            console.log('高阶组件 公共方法');
        }

        render(){
            return <RenderComponent rootThis={this} />;
        }
    };
};

export default hoc;
