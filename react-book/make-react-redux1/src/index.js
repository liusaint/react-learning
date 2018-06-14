import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import PropTypes from 'prop-types';
import createStore from './redux.js';
import {Provider,connect} from './react-redux.js';


	//注意reducer是干嘛的
	function reducer(state, action) {
		if (!state) {
			state = {
				color: 'red',
			};
			return state;
		}
		switch (action.type) {
			case 'UPDATE_COLOR':
				state = {
					...state,
					color: action.color
				}
				break;
		}

		return state;
	}



	var store = createStore(reducer);



	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
