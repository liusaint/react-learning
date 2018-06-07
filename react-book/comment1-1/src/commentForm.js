import React, { Component } from 'react';


class CommentForm extends Component {

	constructor(){
		super();
		this.state = {
			user:'',
			content:''
		}
	}

	handleUserChange(e){
		this.setState({
			user:e.target.value
		})
	}
	handleContentChange(e){
		this.setState({
			content:e.target.value
		})
	}
	handleSubmit(){
		if(this.props.onSubmit){
			const {user,content} = this.state;
			this.props.onSubmit({user,content});
		}
		this.setState({content:''});
	}
	componentDidMount (){
		this.input.focus();
	}

	render() {
		return (
			<div>
				<div className="form-group">
					user: <input type="text" onChange={this.handleUserChange.bind(this)}  value={this.state.user} />
				</div>
				<div className="form-group">
					content: <input type="text" ref={(input=>this.input = input)} onChange={this.handleContentChange.bind(this)}  value={this.state.content} />
				</div>
				<div className="form-group">
					<input type="submit" value="submit" onClick={this.handleSubmit.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default CommentForm;