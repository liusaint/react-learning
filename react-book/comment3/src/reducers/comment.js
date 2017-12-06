

// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'


export default function(state, action) {
    if (!state) {
        state = {
            comments: []
        }
    }
    switch (action.type) {
    case INIT_COMMENTS:
        return {
            comments: action.comments
        }
    case ADD_COMMENT:
        return {
            comments: [
                ...state.comments,
                action.comment
            ]
        }
    case DELETE_COMMENT:        
        return {
            comments: [
                ...state.comments.slice(0, action.index),
                ...state.comments.slice(action.index + 1)
            ]
        }
    default:
        return state;
    }
}


//action creators 简化action使用。直接一个函数就行。dispatch(initComments(comments))类似这样。

//comments = []。这样的数组直接传入对象会变成　comments:[]这样。
export const initComments = (comments) => {
    return {
        type: INIT_COMMENTS,
        comments
    }
}

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const deleteComment = (index) => {
    return {
        type: DELETE_COMMENT,
        index
    }
}


//定义 action types
//编写 reducer
//跟这个 reducer 相关的 action creators
