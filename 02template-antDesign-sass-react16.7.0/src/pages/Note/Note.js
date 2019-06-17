// 此为笔记文件
// 组件名称 首字母大写
import React, { Component } from 'react';
// 引入本地图片
import logo from '../assets/images/logo.svg'

class Demo extends Component{
    constructor(porps){
        super(porps); //porps用于父子组件传值，用this.props获取父组件传来的值
        //定义state
        this.state = {
            color:'red',
            style:{
                fontSize:'40px'
            },
            // 循环
            list:[1,2,3],
            list2:[<div>1</div>,<div>2</div>,<div>3</div>],
            // 表单
            inputValue:'',
            // radio
            sex:'1',
            // select
            citys:['北京','上海','深圳'],
            city:'',
            // checkbox
            hobby:[
                {
                    'title':'旅游',
                    'checked':true
                },
                {
                    'title':'美食',
                    'checked':false
                },
                {
                    'title':'玩游戏',
                    'checked':true
                }
            ],
            // textarea
            textareaValue:''            
        }
    }
    // 方法 结尾不用,号
    funA(){
        console.log(this);//undefined
    }
    funB=()=>{
        console.log(this);//指向当前组件，箭头函数this指向当前上下文
    }
    funC=(param1,param2)=>{
        console.log(param1);
    }
    funD=(e)=>{ //可以写e或者event
        console.log(e.target);
    }
    // 表单绑定 react中没有现成的双向绑定
    inputChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    // ref
    inputChange1=()=>{
        console.log(this.refs.inputA.value);
    }
    // 键盘事件
    inputKeyUp=(e)=>{
        console.log(e.keyCode);
    }
    // 表单
    formSubmit=(e)=>{
        // 阻止表单默认事件
        e.preventDefault();
    }
    // radio
    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        });
    }
    // select
    selectChange=(e)=>{
        console.log(e.target.value);
    }
    // checkbox
    checkboxChange=(e,index)=>{
        let hobby = this.state.hobby;
        hobby[index].checked = !hobby[index].checked;
        this.setState({
            hobby:hobby
        });
    }
    // textarea
    textareaChange=(e)=>{
        console.log(e.target.value);
    }    
    // 生命周期
    // 页面渲染完成
    componentDidMount(){

    }
    // render方法 放最后
    render(){
        return (
            <div>
                {/* 写法有变的属性：class,for改名,style写法改变 */}
                <div className={this.state.color}>111</div>
                <label htmlFor='name'></label>
                <input id='name'/>
                <div style={{'fontSize':'40px'}}>111</div>   
                <div style={this.state.style}>111</div>                
                {/* 引入本地图片 */}
                <img src={logo} />
                <img src={require('../assets/images/logo.svg')} />
                {/* 引入线上图片 */}
                <img src='https://..........' />
                {/* 循环 */}
                {this.state.list2}
                {this.state.list.map((item)=>{
                    return <div key={item}>{item}</div>
                })}
                {/* 事件 调用方法 */}
                <button onClick={this.funA}></button>
                {/* 把this.funA的this传入,也就是把当前组件传入 */}
                <button onClick={this.funA.bind(this)}></button>
                {/* 方法传值 */}
                <button onClick={this.funC.bind(this,'a','b')}></button>
                {/* 事件对象 */}
                <button onClick={this.funD}></button>
                {/* 表单 单向绑定避免报错时，也可以defaultValue */}
                <input value={this.state.inputValue} onChange={this.inputChange}/>
                {/* ref */}
                <input onChange={this.inputChange1} ref='inputA'/>
                {/* 键盘事件 */}
                <input onKeyUp={this.inputKeyUp}/>
                {/* 表单 */}
                <form onSubmit={this.formSubmit}>
                    {/* radio */}
                    男<input type='radio' value='1' checked={this.state.sex=='1'} onChange={this.handleSex}/>
                    女<input type='radio' value='2' checked={this.state.sex=='2'} onChange={this.handleSex}/>
                    {/* select */}
                    居住城市
                    <select value={this.state.city} onChange={this.selectChange}>
                        {this.state.citys.map((item=>{
                            return (
                                <option key={item}>{item}</option>
                            )
                        }))}                        
                    </select>
                    {/* checkbox */}
                    爱好：
                    {this.state.hobby.map((item,index)=>{
                        return (
                            // 此处{item.title}和input标签写在一起，得在外面包一个根元素。key放最外层
                            <div key={item.title}>
                                {item.title}
                                <input type='checkbox' checked={item.checked} onChange={checkboxChange.bind(this,index)}/>
                            </div>                            
                        )
                    })}
                    <input />
                    {/* textarea */}
                    <textarea value={this.state.textareaValue} onChange={this.textareaChange}/>
                    {/* 父子组件通讯 */}
                    import Children from '...';
                    class Parent extends React.Component{
                        constructor(props){
                            super(props);
                            this.state = {
                                parentValue:''
                            }
                        }
                        parentFun=(param)=>{
                            this.setState({
                                parentValue:param
                            })
                        }
                        render(){
                            return (
                                // 父传子数据
                                <Children myData={this.state.parentValue} parentFun={this.parentFun} allParent={this}/>
                                // 父调子方法
                                // 通过this.refs.children获取子组件实例，得在dom渲染完后调用
                                <Children ref='children'/>
                            )
                        }
                    }
                    export default Parent;
                    
                    import PropTypes from 'prop-types';
                    class Children extends React.Component{
                        render(){
                            return (
                                <div>
                                    <span>{this.props.myData}</span>
                                    // bind(null,'a')，不传this.props的this（子组件），传null
                                    // 子调父方法传值
                                    <button onClick={this.props.parentFun.bind(null,'a')}></button>
                                </div>
                            )
                        }
                    }                    
                    // propTypes 规定父组件的传值类型
                    Children.propTypes = {
                        myData:PropTypes.string
                    }
                    // defaultProps 子组件props的默认值
                    Children.defaultProps = {
                        myData:'我是空的myData'
                    }
                    export default Children;
                    {/* a */}
                </form>
            </div>            
        )
    }
}

export default Demo;