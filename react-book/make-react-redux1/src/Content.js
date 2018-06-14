import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch.js';
import {connect} from './react-redux.js';


class Content extends Component {

  static propTypes = {
    color:PropTypes.string
  }

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

function mapStateToProps(state){
  return {
    color:state.color
  }
}

export default connect(Content,mapStateToProps);
