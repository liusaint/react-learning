import React, { Component } from 'react';
import PropTypes from 'prop-types'



const connect = (mapStateToProps, mapDispatchToProps) => (WrappedCom) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }
        componentWillMount() {
            const {store} = this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }
        _updateProps() {
            const {store} = this.context;
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {} // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }
        render() {

            return (
                <div>
                <WrappedCom {...this.state.allProps} />
                </div>
            )
        }
    }

    return Connect;
}


export default connect;

export class Provider extends Component {
    static contextTypes = {
        store: PropTypes.object,
        children:PropTypes.any
    }
    static childContextTypes = {
        store:PropTypes.object
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return (
            <div>
            {this.props.children}
            </div>
        )
    }
}