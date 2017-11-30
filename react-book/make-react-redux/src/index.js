import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'
import Content from './content.js'
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'


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

function createStore(reducer) {
    var state = null;
    var listeners = [];

    var dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }

    dispatch({}) // 初始化 state

    var getState = () => state;
    var subscribe = (listener) => listeners.push(listener);

    return {
        dispatch,
        getState,
        subscribe
    };
}

var store = createStore(themeReducer);

class Index extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {
            store
        }
    }


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
