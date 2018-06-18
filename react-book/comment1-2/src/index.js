import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './commentApp';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';



function reducer(state,action){
	if(!state){
		state = {
			comments:[]
		}
		return state;
	}
	switch (action.type) {
		case 'ADD_COMMENT':
		state = {
			...state,
			comments:[...state.comments,action.comment]
		}
		break;
		case 'DEL_COMMENT':
		var delIndex = state.comments.indexOf(action.comment);

		state = {
			...state,
			comments:[...state.comments.slice(delIndex,1)]
		}
		break;


	}
	return state;
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}><CommentApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
