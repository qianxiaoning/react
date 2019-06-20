import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActions from 'redux/actions/userInfo';
import ReduxSon from 'components/ReduxSon/ReduxSon';

class ReduxExperience extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        // 模拟请求数据
        setTimeout(()=>{
            this.props.userInfoActions.login({
                userId: 'abc',
                city: '北京'
            });
        },2000);        
    }
    render(){
        return (
            <div>
                <h3>ReduxExperience</h3>  
                <p>{this.props.userInfo.userId}</p>
                <p>{this.props.userInfo.city}</p>
                <ReduxSon actions={this.props.userInfoActions}/>
            </div>            
        )
    }
}

// 把state赋给props
function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxExperience);