import React, { Component } from 'react';


class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '1',
      content: '2'
    }
  }
  handleChangeName(event) {
    this.setState({
      username: event.target.value
    })
  }
  handleChangeContent(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit1(event){
  	if(this.props.onSubmit){
  		var comment = {
  			username:this.state.username,
  			content:this.state.content
  		}
  		this.props.onSubmit(comment);
  	}
  }
  render() {
    return (
      <div className='comment-input'>
			<div className='comment-field'>
			<span className='comment-field-name'>用户名：</span>
			<div className='comment-field-input'>
			<input value={this.state.username} onChange={this.handleChangeName.bind(this)} />
			</div>
			</div>
			<div className='comment-field'>
			<span className='comment-field-name'>评论内容：</span>
			<div className='comment-field-input'>
			<textarea value={this.state.content} onChange={this.handleChangeContent.bind(this)}/>
			</div>
			</div>
			<div className='comment-field-button'>
			<button onClick={this.handleSubmit1.bind(this)}>
			发布
			</button>
			</div>
			</div>
    )
  }
}

export default CommentInput;