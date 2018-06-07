import React, { Component } from 'react';

import Comment from './comment.js';
import PropTypes from 'prop-types'

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

export default CommentList;