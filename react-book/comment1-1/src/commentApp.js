import React, { Component } from 'react';

import './index.css';
import CommentForm from './commentForm.js';
import CommentList from './commentList.js';

class CommentApp extends Component {
	constructor(){
		super();
		this.state = {
			comments:[]
		}
	}
	handleSubmit(comment){
		this.state.comments.push(comment);
		this.setState({comments:this.state.comments});
	}
	render() {
	    return (
			<div>
				<CommentForm onSubmit={this.handleSubmit.bind(this)}></CommentForm>
				<CommentList comments={this.state.comments}></CommentList>
			</div>
	    );
	}
}

export default CommentApp;
