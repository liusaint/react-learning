
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
    case 'UPDATE_TITLE_CONTENT':
        appState.title.content = action.content;
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
