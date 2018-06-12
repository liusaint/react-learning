import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    constructor() {
        super()
        this.state = {
            themeColor: ''
        }
    }
    componentWillMount() {
        this._updateThemeColor()
    }

    _updateThemeColor() {
        const {
            store
        } = this.context;
        const state = store.getState();
        this.setState({
            themeColor: state.color
        });
    }
    render() {
        return ( <
            h1 className = "Header"
            style = { { color: this.state.themeColor } } >
            header <
            /h1>
        );
    }
}
export default Header;
