import React, { Component } from 'react';
import ThemeSwitch from './themeSwitch.js';
import PropTypes from 'prop-types'
import connect from './react-reduct.js'

class Content extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <div style={{color:this.props.themeColor}}>
			React.js内容
			<ThemeSwitch></ThemeSwitch>
			</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);


export default Content;