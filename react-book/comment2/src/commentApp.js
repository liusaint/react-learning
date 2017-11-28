import React, { Component } from 'react';
import CommentInput from './commentInput.js';
import CommentList from './commentList.js';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    componentWillMount() {
        var comments = localStorage.getItem('comments');        
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({
                comments: comments
            })
        }
    }
    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
        localStorage.setItem('comments',JSON.stringify(this.state.comments))
    }
    onHandleDel(key){
        this.state.comments.splice(key,1);
        this.setState({
            comments: this.state.comments
        })
        localStorage.setItem('comments',JSON.stringify(this.state.comments))
    }
    render() {
        return (
            <div className = "wrapper">
                    <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                    <CommentList comments={this.state.comments} onHandleDel={this.onHandleDel.bind(this)} />
                    </div>
        )
    }
}

export default CommentApp;