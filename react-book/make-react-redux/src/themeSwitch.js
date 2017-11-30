import React, { Component } from 'react';
import PropTypes from 'prop-types'


class ThemeSwitch extends Component {
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
        var {store} = this.context;
        store.subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor() {
        var {store} = this.context;
        var state = store.getState();
        this.setState({
            themeColor: state.themeColor
        })
    }
    handleSwitchColor(color) {
        const {store} = this.context
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }
    render() {
        return (
            <div>
			<button style={{
                color: this.state.themeColor
            }}
            onClick={this.handleSwitchColor.bind(this, 'red')}
            >red</button>
			<button style={{
                color: this.state.themeColor
            }}
            onClick={this.handleSwitchColor.bind(this, 'blue')}
            >blue</button>
			</div>
        )
    }
}

export default ThemeSwitch;