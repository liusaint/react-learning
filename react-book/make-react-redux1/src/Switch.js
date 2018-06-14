import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux.js';


class Switch extends Component {

	constructor() {
        super()
    }

    static propTypes = {
        themeColor:PropTypes.string
    }
    handleChange(color){
        this.props.onColorChange(color);
    }

  render() {
    return (
      <div className="Switch" > 
         <button onClick={this.handleChange.bind(this,'red')} style={{color:this.props.themeColor}}>red</button>
         <button onClick={this.handleChange.bind(this,'blue')}  style={{color:this.props.themeColor}}>blue</button>
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
//　mapState其实也可以看作是作了一个映射。将store中的key改成我们的key。
function mapStateToProps(state){
    return {
        themeColor:state.color
    }
}



export default connect(Switch,mapStateToProps,mapDispatchToProps);
