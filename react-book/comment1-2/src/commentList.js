import React, { Component } from 'react';

import Comment from './comment.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	static propTypes = {
		comments: PropTypes.array
	}
  	render() {
	  	var comments = this.props.comments;
	    return (
	    	<ul>
	    	{comments.map((comment)=><Comment key={comment.time} comment={comment} onDelComment={this.props.onDelComment}></Comment>)}
	    	</ul>
	    );
  	}
}

function mapStateToProps(state){
	return {
		comments:state.comments,
	}
}
function mapDispatchToProps(dispatch){
	return {
		onDelComment:function(comment){
			dispatch({
				type:'DEL_COMMENT',
				comment:comment,
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);