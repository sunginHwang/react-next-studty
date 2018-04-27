import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import { increment, decrement } from '../store/modules/reduxExampleReducer';
import withRedux from '../util/withRedux';
import {initStore} from "../store/configure";

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

const mapStateToProps = ({ number }) => ({ number });


const mapDispatchToProps = (dispatch) => {
    return {
        increment: bindActionCreators(increment, dispatch),
        decrement: bindActionCreators(decrement, dispatch)
    }
};
export default (withRedux(initStore, mapStateToProps, mapDispatchToProps)(reduxExample))
