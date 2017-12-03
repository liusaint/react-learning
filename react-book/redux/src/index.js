import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'
import Content from './content.js'
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'
// 头部引入 Provider
import { Provider } from 'react-redux'
import {createStore} from 'redux'

function themeReducer(state, action) {
    if (!state) {
        state = {
            'themeColor': 'red'
        }

    }
    switch (action.type) {
    case 'CHANGE_COLOR':
        return {
            ...state,
            'themeColor': action.themeColor
        }

    default:
        return state;

    }
}



var store = createStore(themeReducer);

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


ReactDOM.render(<Provider store={store}>
<Index/>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
