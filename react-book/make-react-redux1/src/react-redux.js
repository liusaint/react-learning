import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import createStore from './redux.js';


function connect(Com,mapStateToProps,mapDispatchToProps){
	class rCom extends Component{
		static contextTypes = {
			store:PropTypes.object
		}
		constructor(){
			super();
			this.state = {
				allProps:'',
			}			
		}
		componentWillMount(){
			const store = this.context.store;

			this.updateData();
			//订阅更新。
			store.subscribe(()=>{
				this.updateData();
			})
		}
		//更新数据。
		updateData(){
			const store = this.context.store;
			var state = store.getState();
			const mapState = mapStateToProps?mapStateToProps(state):{};
			const mapDispatch = mapDispatchToProps?mapDispatchToProps(store.dispatch):{};
			//也注意下面几个顺序
			this.setState({
				allProps:{
					...this.props,
					...mapState,
					...mapDispatch
				}
			})
		}
		render(){
			return (
				<Com {...this.state.allProps}></Com>
				)
		}
	}
	return rCom;
}


class Provider extends Component{
	static childContextTypes = {
		store: PropTypes.object
	}
	getChildContext() {
		return {
			store:this.props.store||{}
		}
	}
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export {
	Provider,
	connect
}