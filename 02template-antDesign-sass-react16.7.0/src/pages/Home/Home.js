import React, { Component } from 'react';
import Pop from 'components/ReactSlotPra/ReactSlotPra';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            name:'qxn',
            age:'18'
        }
    }
    nameChange(e){
        this.setState({
            name:e.target.value
        });
    }
    ageChange(e){
        this.setState({
            age:e.target.value
        });
    }
    render(){
        const main = <div>
            <span>姓名：</span><input type='text' value={this.state.name} onChange={(e)=>this.nameChange(e)} />
            <br/>
            <span>年龄：</span><input type='text' value={this.state.age} onChange={(e)=>this.ageChange(e)} />
        </div>;
        return (
            <div>
                <h3>home</h3>
                <Pop main={main}>
                    <div>
                        <p>2222</p>
                    </div>
                    1111                    
                    <span>3333</span>
                </Pop>
            </div>
        )
    }
}

export default Home;