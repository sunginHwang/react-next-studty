import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as sampleAction from '../core/actions/SampleApi';
import style from '../style/scss/Main.scss';

class ReduxExampleContainer extends React.Component{


    componentDidMount () {
    }

    componentWillUnmount () {
    }

    successBtnClick(){
        const { sampleAction } = this.props;
        sampleAction.asyncCall(1);
    }

    failBtnClick(){
        const { sampleAction } = this.props;
        sampleAction.asyncCall('12/e212');
    }

    render() {
        const { count, title, body } = this.props;
        console.log(style);
        return(
            <div>

                <div>redux status is <span> {count}</span></div>
                <div>redux body is <span> {body}</span></div>
                <div>redux title is <span> {title}</span></div>
                <div>
                    <button className={style.tag} onClick={(e)=>{
                        this.successBtnClick()}}>apiSuccessCallButtons</button>
                    <button onClick={(e)=>{
                        this.failBtnClick()}}>apiFailCallButton</button>
                </div>
            </div>
        );
    }
}

export default
    connect(
    (state) => ({
        count: state.ReduxSagaExampleReducer.count,
        body: state.ReduxSagaExampleReducer.body,
        title: state.ReduxSagaExampleReducer.title
    }),
    (dispatch) => ({
        sampleAction: bindActionCreators(sampleAction, dispatch),
    })
)(ReduxExampleContainer);