import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './react-redux.js';


class Switch extends Component {

	constructor() {
        super()
    }
    handleClick(color){    	
    	const {
            store
        } = this.context;

        store.dispatch({
        	type:'UPDATE_COLOR',
        	color:color
        })
        
    }
  render() {
    return (
      <div className="Switch" > 
         <button onClick={this.handleClick.bind(this,'red')} style={{color:this.props.color}}>red</button>
         <button onClick={this.handleClick.bind(this,'blue')}  style={{color:this.props.color}}>blue</button>
      </div>
    );
  }
}

export default connect(Switch);
