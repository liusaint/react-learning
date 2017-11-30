/* 版本一　*/
/*
var appState = {
    title: {
        content: 'title',
        color: '#000'
    },
    content: {
        content: 'content',
        color: '#666'
    }
}

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    var titleDom = document.getElementById('title');
    titleDom.innerHTML = title.content;
    titleDom.style.color = title.color;
}

function renderContent(content) {
    var contentDom = document.getElementById('content');
    contentDom.innerHTML = content.content;
    contentDom.style.color = content.color;
}


function dispatch(action) {
    switch (action.type) {
    case 'UPDATE_TITLE_COLOR':
        appState.title.color = action.color;
        break;
    case 'UPDATE_TITLE_CONTENT':
        appState.title.content = action.content;
        break;
    }
}
renderApp(appState)
setTimeout(function() {
dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'orange'
})
dispatch({
    type: 'UPDATE_TITLE_CONTENT',
    content: '修改过后的'
})
renderApp(appState);
}, 1000);
*/


/* 版本二　
 * 1.封装createStore(state,stateChanger)
 * 2.订阅数据改变。重新render。
 */
/*
var appState = {
    title: {
        content: 'title',
        color: '#000'
    },
    content: {
        content: 'content',
        color: '#666'
    }
}

function stateChanger (state,action) {
    switch (action.type) {
    case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color;
        break;
    case 'UPDATE_TITLE_CONTENT':
        state.title.content = action.content;
        break;
    }
}

function createStore(state, stateChanger) {
	var listeners = [];

    var dispatch = (action) => {
    	stateChanger(state, action);
    	listeners.forEach((listener) => listener());
    }
    var getState = () => state;
    var subscribe = (listener)=>listeners.push(listener);
    return {
        dispatch,
        getState,
        subscribe
    };
}

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    var titleDom = document.getElementById('title');
    titleDom.innerHTML = title.content;
    titleDom.style.color = title.color;
}

function renderContent(content) {
    var contentDom = document.getElementById('content');
    contentDom.innerHTML = content.content;
    contentDom.style.color = content.color;
}


var store = createStore(appState,stateChanger);
renderApp(store.getState())
store.subscribe(()=>renderApp(store.getState()));

setTimeout(function() {
store.dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'orange'
})
store.dispatch({
    type: 'UPDATE_TITLE_CONTENT',
    content: '修改过后的'
})


}, 1000);
*/


/* 版本三　
 * 1.共享状态。不直接修改原来的state。
 * 
 */
(function() {

	return;
	var appState = {
		title: {
			content: 'title',
			color: '#000'
		},
		content: {
			content: 'content',
			color: '#666'
		}
	}

	function stateChanger(state, action) {
		switch (action.type) {
			case 'UPDATE_TITLE_COLOR':
				return {
					...state,
					title: {
						...state.title,
						color: action.color
					}
				}

			case 'UPDATE_TITLE_CONTENT':
				return {
					...state,
					title: {
						...state.title,
						content: action.content
					}
				}

			default:
				return state;

		}
	}

	function createStore(state, stateChanger) {
		var listeners = [];

		var dispatch = (action) => {
			state = stateChanger(state, action);
			listeners.forEach((listener) => listener());
		}
		var getState = () => state;
		var subscribe = (listener) => listeners.push(listener);
		return {
			dispatch,
			getState,
			subscribe
		};
	}

	function renderApp(newAppState, oldAppState = {}) {
		if (newAppState === oldAppState) return;
		console.log('render app');
		renderTitle(newAppState.title, oldAppState.title);
		renderContent(newAppState.content, oldAppState.content);
	}

	function renderTitle(newTitle, oldTitle = {}) {
		if (newTitle === oldTitle) return;
		console.log('render title');
		var titleDom = document.getElementById('title');
		titleDom.innerHTML = newTitle.content;
		titleDom.style.color = newTitle.color;
	}

	function renderContent(newContent, oldContent = {}) {
		if (newContent === oldContent)
			console.log('render content');
		var contentDom = document.getElementById('content');
		contentDom.innerHTML = newContent.content;
		contentDom.style.color = newContent.color;
	}


	var store = createStore(appState, stateChanger);
	renderApp(store.getState())
	store.subscribe(() => renderApp(store.getState()));

	setTimeout(function() {
		store.dispatch({
			type: 'UPDATE_TITLE_COLOR',
			color: 'orange'
		})
		store.dispatch({
			type: 'UPDATE_TITLE_CONTENT',
			content: '修改过后的'
		})


	}, 1000);

})();



/* 版本四　
 * 1.合并state和stateChanger。
 * 2.修改名称为reducer。
 */
(function() {


	function reducer(state, action) {
		if (!state) {
			state = {
				title: {
					content: 'title',
					color: '#000'
				},
				content: {
					content: 'content',
					color: '#666'
				}
			}
			
		}
		switch (action.type) {
			case 'UPDATE_TITLE_COLOR':
				return {
					...state,
					title: {
						...state.title,
						color: action.color
					}
				}

			case 'UPDATE_TITLE_CONTENT':
				return {
					...state,
					title: {
						...state.title,
						content: action.content
					}
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

	function renderApp(newAppState, oldAppState = {}) {
		if (newAppState === oldAppState) return;
		console.log('render app');
		renderTitle(newAppState.title, oldAppState.title);
		renderContent(newAppState.content, oldAppState.content);
	}

	function renderTitle(newTitle, oldTitle = {}) {
		if (newTitle === oldTitle) return;
		console.log('render title');
		var titleDom = document.getElementById('title');
		titleDom.innerHTML = newTitle.content;
		titleDom.style.color = newTitle.color;
	}

	function renderContent(newContent, oldContent = {}) {
		if (newContent === oldContent)
			console.log('render content');
		var contentDom = document.getElementById('content');
		contentDom.innerHTML = newContent.content;
		contentDom.style.color = newContent.color;
	}


	var store = createStore(reducer);
	renderApp(store.getState())
	store.subscribe(() => renderApp(store.getState()));

	setTimeout(function() {
		store.dispatch({
			type: 'UPDATE_TITLE_COLOR',
			color: 'orange'
		})
		store.dispatch({
			type: 'UPDATE_TITLE_CONTENT',
			content: '修改过后的'
		})


	}, 1000);

})();