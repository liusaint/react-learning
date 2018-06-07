import React, { Component } from 'react';

import Comment from './comment.js';


class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
  	var comments = this.props.comments;
    return (
    	<ul>
    	{comments.map((comment,i)=><Comment key={i} comment={comment}></Comment>)}
    	</ul>
    );
  }
}

export default CommentList;