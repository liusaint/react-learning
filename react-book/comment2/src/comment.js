import React, { Component } from 'react';


//这个showTime在删除一条评论后组件中好像没有即时更新。
class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            showTime: '',
        }
    }
    dealContent() {

        var content = this.props.comment.content;

        content = content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>');

        return content;
    }

    handleClickDel(key) {
        if (this.props.onHandleDel) {
            this.props.onHandleDel(key);
        }
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
    componentWillMount() {
        var time = this.props.comment.time;
        this.calTime(time);
        this.timer = setInterval(() => this.calTime(time), 5000);
        console.log('will')

    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {



        return (
            <div className='comment'>
        <div className='comment-user'>
          <span className='comment-username'>
            {this.props.comment.username}
          </span>：
        </div>
        <p dangerouslySetInnerHTML={{
                __html: this.dealContent(this.props.comment.content)
            }} />
        <span className='comment-createdtime'>
          {this.state.showTime}
        </span>
        <span
            onClick={this.handleClickDel.bind(this, this.props.index)}
            className='comment-delete'>
          删除
        </span>
      </div>



        )
    }
}

export default CommentList;