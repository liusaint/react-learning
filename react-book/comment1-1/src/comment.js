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
	    return (
	    	<li>
	    		{comment.user}:{comment.content}
	    		<br/>
	    		{this.state.showTime}
	    	</li>
	    );
  	}
}

export default Comment;