import React, { Component } from 'react';
import {connect} from 'react-redux';


class CommentForm extends Component {

	constructor(){
		super();
		this.state = {
			user:'',
			content:''
		}
	}

	componentWillMount(){
		var user = localStorage.getItem('user')||'';
		this.setState({user})
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
		if (this.props.onSubmit) {
			const {
				user,
				content
			} = this.state;
			var time = new Date().getTime();
			this.props.onSubmit({
				user,
				content,
				time
			});
			this.setState({
				content: ''
			});
			localStorage.setItem('user', user);
		}
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

function mapStateToProps(state){
	return {};
}
function mapDispatchToProps(dispatch){
	return {
		onSubmit:function(comment){
			dispatch({
				type:'ADD_COMMENT',
				comment
			})
		}
	}
}




//不用层层传递了，直接在form中修改。
export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);