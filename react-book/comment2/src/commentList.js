import React, { Component } from 'react';
import Comment from './comment.js';


class CommentList extends Component{
	static defaultProps = {
		comments:[]
	}
	onHandleDel(key){
		if(this.props.onHandleDel){
			this.props.onHandleDel(key)
		}
	}
	render(){
		var comments = this.props.comments;
		return (
			<div>
			{comments.map((comment,i)=><Comment comment={comment} onHandleDel={this.onHandleDel.bind(this)} index={i} key={comment.time} />)}
				</div>
				)
		}
	}

export default CommentList;