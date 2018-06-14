import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch.js';


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
        this._updateThemeColor();
        this.context.store.subscribe(()=>{
          this._updateThemeColor();
        })
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
  render() {
    return (
      <div className="Content" style={{color:this.state.themeColor}}>
      	内容
         <Switch></Switch>
      </div>
    );
  }
}

export default Content;
