import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import createStore from './redux.js';


export default function connect(Com,mapStateToProps,mapDispatchToProps){
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
			const mapState = mapStateToProps?mapStateToProps(state):state;
			const mapDispatch = mapStateToProps?mapDispatchToProps(store.dispatch):{};
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