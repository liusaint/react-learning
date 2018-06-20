import React, { Component } from 'react';
import {connect} from 'react-redux';


class CommentForm extends Component {

	static defaultProps = {
		comments:[],
	}

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
			var comment = {
				user,
				content,
				time
			};

			this.props.onSubmit(comment);

			this.setState({
				content: ''
			});
			localStorage.setItem('user', user);
		}

		//这样直接push没有问题吗？如何优雅的操作props中的数据。
		//redux是同步还是异步？
		this.props.comments.push(comment);
		localStorage.setItem('comments',JSON.stringify(this.props.comments));

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
	return {
		comments:state.comments
	};
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