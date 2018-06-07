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
	componentWillMount(){
		var commentsStr = localStorage.getItem('comments');
		var comments = (commentsStr && JSON.parse(commentsStr))||[];
		this.setState({
			comments:comments
		})
	}
	handleSubmit(comment){		
		this.state.comments.push(comment);
		this.setState({comments:this.state.comments});
		localStorage.setItem('comments',JSON.stringify(this.state.comments));
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
/*
页面加载完成自动聚焦到评论输入框。
把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。
把已经发布的评论持久化，存放到浏览器的 LocalStorage 中。页面加载时会把已经保存的评论加载出来，显示到页面的评论列表上。
评论显示发布日期，如“1 秒前”，”30 分钟前”，并且会每隔 5 秒更新发布日期。
评论可以被删除。
类似 Markdown 的行内代码块显示功能，用户输入的用 `` 包含起来的内容都会被处理成用 <code> 元素包含。例如输入 `console.log` 就会处理成 <code>console.log</code> 再显示到页面上。
 */