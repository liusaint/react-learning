import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div style={{
                color: this.props.themeColor
            }}>
        React.js小书
        </div>
        )
    }
}

// // 直接用var为啥不行
// var mapStateToProps = (state)=>{
// 	return {
// 		themeColor:state.themeColor
// 	}
// }

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateToProps)(Header);
export default Header;