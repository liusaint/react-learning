import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './react-redux.js';


class Switch extends Component {

	constructor() {
        super()
    }

  render() {
    return (
      <div className="Switch" > 
         <button onClick={this.props.onColorChange.bind(null,'red')} style={{color:this.props.color}}>red</button>
         <button onClick={this.props.onColorChange.bind(null,'blue')}  style={{color:this.props.color}}>blue</button>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
    return {
        onColorChange:(color) => {
            dispatch({
                type: 'UPDATE_COLOR',
                color: color
            })
        }
    }
}

function mapStateToProps(state){
    return {
        color:state.color
    }
}



export default connect(Switch,mapStateToProps,mapDispatchToProps);
