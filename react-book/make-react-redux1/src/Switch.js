import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Content extends Component {
	static contextTypes = {
		store:PropTypes.object
	}
	constructor() {
        super()
        this.state = {
            themeColor: ''
        }
    }
    componentWillMount() {
        this._updateThemeColor()
    }

    _updateThemeColor() {
        const {
            store
        } = this.context;
        const state = store.getState();
        this.setState({
            themeColor: state.color
        });
    }
    handleClick(color){    	
    	const {
            store
        } = this.context;

        store.dispatch({
        	type:'UPDATE_COLOR',
        	color:color
        })
        this._updateThemeColor();
    }
  render() {
    return (
      <div className="Content" > 
         <button onClick={this.handleClick.bind(this,'red')} style={{color:this.state.themeColor}}>red</button>
         <button onClick={this.handleClick.bind(this,'blue')}  style={{color:this.state.themeColor}}>blue</button>
      </div>
    );
  }
}

export default Content;
