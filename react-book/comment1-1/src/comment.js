import React, { Component } from 'react';

class Comment extends Component {

  render() {
  	var comment = this.props.comment;
    return (
    	<li>
    		{comment.user}:{comment.content}
    	</li>
    );
  }
}

export default Comment;