import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux.js';


class Header extends Component {
    static propTypes = {
        color:PropTypes.string
    }
    constructor() {
        super()
    }
    render() {
        return ( <
            h1 className = "Header"
            style = { { color: this.props.color } } >
            header <
            /h1>
        );
    }
}

function mapStateToProps(state){
  return {
    color:state.color
  }
}


export default connect(Header,mapStateToProps);
