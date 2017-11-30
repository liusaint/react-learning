import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'
import Content from './content.js'
import registerServiceWorker from './registerServiceWorker';

class Index extends Component {
    render() {
        return (
            <div>
        	<Header />
        	<Content />
        	</div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
