import React, { Component } from 'react';
import http from 'utils/http';
import urls from 'utils/urls';
import { Button } from 'antd';

class HttpPra extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    async componentDidMount(){
        const res = await http.get(urls.axiosPra);
        console.log(res.data);
    }
    render(){
        return (
            <div>
                <h3>HttpPra</h3>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}

export default HttpPra;