import React from 'react';
import PropTypes from 'prop-types';

require('./componentA.less');

class ComponentA extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div className='componentA'>{this.props.name}</div>
        );
    }
}

ComponentA.propTypes = {
    name: PropTypes.string
};
ComponentA.defaultProps = {
    name: ''
};

export default ComponentA;
