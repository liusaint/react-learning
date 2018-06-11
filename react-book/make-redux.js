function renderApp(app) {
	console.log('render app')
	renderTitle(app.title);
	renderContent(app.content)
}
function renderTitle(title) {
	console.log('render title'+title);

}
function renderContent(content) {
	console.log('render content'+content);
}


var appState = {
	title:'title',
	content :'content'
}

renderApp(appState);
//使用一个函数来统一修改属性。
//注意这里使用了全局变量，不好。要封装一下。
function dispatch(action){
	switch(action.type){
		case 'UPDATA_TITLE':
		appState.title = action.title;
		break;
		case 'UPDATA_CONTENT':
		appState.content = action.content;
		break;
	}
}
dispatch({
	type:'UPDATA_TITLE',
	title:'title1'
})

renderApp(appState);

//part2.
// store是什么。包含状态以及状态的修改action。以及状态的一些操作。
// var appState = {

// }
function stateChanger(state,action) {
	switch (action.type) {
		case 'UPDATA_TITLE':
			appState.title = action.title;
			break;
		case 'UPDATA_CONTENT':
			appState.content = action.content;
			break;
	}
}
function createStore(state, stateChanger) {
		var listeners = [];
		var dispatch = (action)=>{
			stateChanger(state,action);
			listeners.forEach(listener=>listener());
		}
		var getState = ()=>state;
		var subscribe = fn=>listeners.push(fn);
		return {
			dispatch,
			getState,
			subscribe
		}
}

var store = createStore(appState,stateChanger);

store.subscribe(()=>renderApp(store.getState()));
store.dispatch({
	type:'UPDATA_CONTENT',
	content:'content1'
})
