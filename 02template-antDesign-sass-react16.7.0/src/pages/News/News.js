import React, { Component } from 'react';
import Pop from 'components/ReactSlotPra/ReactSlotPra';

class News extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        const main = <div>
            <p>啦啦啦啦</p>
            <p>我是快乐的小当家</p>
        </div>;
        return (
            <div>
                <h3>home</h3>
                <Pop main={main}>
                    1111
                    <div>
                        <p>2222</p>
                    </div>
                    <span>3333</span>
                </Pop>
            </div>
        )
    }
}

export default News;