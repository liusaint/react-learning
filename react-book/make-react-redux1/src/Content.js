import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch.js';
import connect from './react-redux.js';


class Content extends Component {

	constructor() {
    super()
  }

  render() {
    return (
      <div className="Content" style={{color:this.props.color}}>
      	内容
         <Switch></Switch>
      </div>
    );
  }
}

export default connect(Content);
