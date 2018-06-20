import React, { Component } from 'react';

import Comment from './comment.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	static propTypes = {
		comments: PropTypes.array,
		initComments:PropTypes.func,
		onDelComment:PropTypes.func
	}
	//从localStorage中获取数据
	componentWillMount(){
		var commentsStr = localStorage.getItem('comments');
		var comments = (commentsStr && JSON.parse(commentsStr)) || [];
		this.props.initComments && this.props.initComments(comments);
	}
	handleDel(comment){

		this.props.onDelComment(comment);

		var delIndex = this.props.comments.indexOf(comment);
		var newComments = this.props.comments.slice();
		newComments.splice(delIndex,1);


		localStorage.setItem('comments',JSON.stringify(newComments));
	}
  	render() {
	  	var comments = this.props.comments;
	    return (
	    	<ul>
	    	{comments.map((comment)=><Comment key={comment.time} comment={comment} onDelComment={this.handleDel.bind(this)}></Comment>)}
	    	</ul>
	    );
  	}
}

function mapStateToProps(state){
	return {
		comments:state.comments,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onDelComment: function(comment) {
			dispatch({
				type: 'DEL_COMMENT',
				comment: comment,
			})
		},
		initComments: function(comments) {
			dispatch({
				type: 'INIT_COMMENTS',
				comments
			})


		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);