import React, { Component } from 'react';
import ThemeSwitch from './themeSwitch.js';

class Content extends Component {
    render() {
        return (
            <div>
			React.js内容
			<ThemeSwitch></ThemeSwitch>
			</div>
        )
    }
}

export default Content;