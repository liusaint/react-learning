import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './react-redux.js';


class Header extends Component {

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
export default connect(Header);
