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
  render() {
    return (
      <div className="Content" > 
         <button style={{color:this.state.themeColor}}>red</button>
         <button style={{color:this.state.themeColor}}>blue</button>
      </div>
    );
  }
}

export default Content;
