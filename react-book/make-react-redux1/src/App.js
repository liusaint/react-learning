import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import PropTypes from 'prop-types';
import createStore from './redux.js';


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
	// var oldAppState = store.getState();
	// store.subscribe(() => {
	// 	var newAppState = store.getState();
	// 	renderApp(newAppState, oldAppState);
	// 	oldAppState = newAppState;
	// })
	// store.dispatch({
	// 	type: 'UPDATA_CONTENT',
	// 	content: 'content2'
	// })
	// store.dispatch({
	// 	type: 'UPDATA_CONTENT',
	// 	content: 'content2'
	// })
	// 
	// 
class App extends Component {
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
		  <div className="App" >
		  <Header></Header>
		  <Content></Content>        
		  </div>
		);
	}
}

export default App;
