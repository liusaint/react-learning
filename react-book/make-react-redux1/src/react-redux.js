
	//注意reducer是干嘛的
	// function reducer(state, action) {
	// 	if (!state) {
	// 		state = {
	// 			title: 'title',
	// 			content: 'content'
	// 		};
	// 		return state;
	// 	}
	// 	switch (action.type) {
	// 		case 'UPDATA_TITLE':
	// 			state = {
	// 				...state,
	// 				title: action.title
	// 			}

	// 			break;
	// 		case 'UPDATA_CONTENT':
	// 			state = {
	// 				...state,
	// 				content: action.content
	// 			}
	// 			break;
	// 	}
	// 	return state;
	// }

	function createStore(reducer) {
		var state = null;
		var listeners = [];
		var dispatch = (action) => {
			state = reducer(state, action);
			listeners.map(listener => listener());
		}
		var subscribe = listener => listeners.push(listener);
		var getState = () => state;
		dispatch({});
		return {
			getState,
			subscribe,
			dispatch
		}

	}


	// var store = createStore(reducer);
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
export default createStore;