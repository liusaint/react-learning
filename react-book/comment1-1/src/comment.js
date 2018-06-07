import React, { Component } from 'react';

class Comment extends Component {
	constructor(){
		super();
		this.state = {
			showTime:''
		}
	}
	componentWillMount(){
		this.timer = setInterval(()=>this.calTime(this.props.comment.time),5000);
		this.calTime(this.props.comment.time);
	}
	componentWillUnmount() {
        clearTimeout(this.timer);
    }
    calTime(time) {
        var oriTime = time;
        var now = new Date().getTime();

        var timeDiff = Math.floor((now - oriTime) / 1000);
        var showTime = '';

        if (timeDiff < 60) {
            showTime = timeDiff + ' 秒前'
        } else {
            showTime = Math.floor(timeDiff / 60) + ' 分钟前'
        }
        this.setState({
            showTime: showTime
        });
    }
  	render() {
	  	var comment = this.props.comment;
	  	//注意onClick={a()},会自动执行a()。this.props.onDelComment.bind(this,comment)
	  	//props中的事件可以一直传递下去，不过要一层一层地写
	    return (
	    	<li>
	    		{comment.user}:{comment.content}
	    		<br/>
	    		{this.state.showTime}
	    		<button onClick={this.props.onDelComment.bind(this,comment)}>del</button>
	    	</li>
	    );
  	}
}

export default Comment;