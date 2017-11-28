import React, { Component } from 'react';
import PropTypes from 'prop-types'


class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleChangeName(event) {
    var username = event.target.value;
    this.setState({
      username: username
    })
    localStorage.setItem('username',username);
  }
  componentWillMount(){
    var username = localStorage.getItem('username') || '';
    this.setState({
      username: username
    })
  }
  componentDidMount(){    
    this.textarea.focus();
  }
  handleChangeContent(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(event){
  	if(this.props.onSubmit){
  		var comment = {
  			username:this.state.username,
  			content:this.state.content,
        time:new Date().getTime()
  		}
  		this.props.onSubmit(comment);
  	}
    this.setState({'content':''})
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
			<textarea value={this.state.content} ref={(textarea)=>this.textarea = textarea} onChange={this.handleChangeContent.bind(this)}/>
			</div>
			</div>
			<div className='comment-field-button'>
			<button onClick={this.handleSubmit.bind(this)}>
			发布
			</button>
			</div>
			</div>
    )
  }
}

export default CommentInput;