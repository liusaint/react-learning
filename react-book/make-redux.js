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