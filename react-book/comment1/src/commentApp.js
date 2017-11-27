import React, { Component } from 'react';
import CommentInput from './commentInput.js';
import CommentList from './commentList.js';

class CommentApp extends Component {
	constructor(){
		super();
		this.state = {
			comments:[]
		}
	}

  handleSubmitComment(comment) {
    this.setState({comments:this.state.comments.push(comment)})
  }
  render() {
    return (
      <div className = "wrapper">
			<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
			<CommentList />
			</div>
    )
  }
}

export default CommentApp;