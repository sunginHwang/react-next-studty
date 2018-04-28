import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import WithRoot from '../hoc/WithRoot';
import { increment, decrement } from '../store/modules/reduxExampleReducer';

class reduxExample extends React.Component{


    componentDidMount () {
    }

    componentWillUnmount () {
    }

    render () {
        console.log(this.props);
        return (
                <div>
                    <span>redux-tesign</span>
                    <br/>
                    <span>count : <b>{this.props.number}</b></span>
                    <br/>
                    <button onClick={()=>{this.props.increment()}}>number Increase</button>
                    <button onClick={()=>{this.props.decrement()}}>number Decrease</button>
                </div>
        )
    }
}

export default WithRoot(connect(
    (state) => ({
        number: state.reduxExampleReducer.number
    }),
    (dispatch) => ({
        increment: bindActionCreators(increment, dispatch),
        decrement: bindActionCreators(decrement, dispatch)
    })
)(reduxExample));