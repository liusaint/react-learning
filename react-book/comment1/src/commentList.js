import React, { Component } from 'react';
import Comment from './comment.js';


class CommentList extends Component{
	static defaultProps = {
		comments:[]
	}
	render(){
		var comments = this.props.comments;
		return (
			<div>
			{comments.map((comment,i)=><Comment comment={comment} key={i} />)}
				</div>
				)
		}
	}

export default CommentList;