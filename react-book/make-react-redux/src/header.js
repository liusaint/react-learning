import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
    componentWillMount(){
    	this._updateThemeColor()
    	var {store} = this.context;
    	store.subscribe(() => this._updateThemeColor())
    }
	_updateThemeColor(){
		var {store} = this.context;
		var state = store.getState();
		this.setState({themeColor:state.themeColor})
	}
    render() {
        return (
            <div style={{color:this.state.themeColor}}>
			React.js小书
			</div>
        )
    }
}

export default Header;