import Layout from '../component/common/layout/Layout';
import React from "react";
import axios from "axios";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as sampleAction from '../core/actions/SampleApi';
import style from '../style/scss/Main.scss';

class reduxExample extends React.Component {
    static async getInitialProps ({...props}) {
        await console.log(props);
        await props.ctx.store.dispatch(sampleAction.asyncCall(2));
        
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
        const { count, title, body, users } = this.props;
        console.log('---2--');
        console.log(this.props);
        console.log('---2--');
        return(
        <Layout title='리덕스 페이지'>
            <div>
                <div>redux status is <span> {count}</span></div>
                <div>redux body is <span> {body}</span></div>
                <div>redux title is <span> {title}</span></div>
                <div>
                    <button className={style.tag} onClick={(e)=>{
                        this.successBtnClick()}}>apiSuccessCallButtons</button>
                    <button className={style.tag} onClick={(e)=>{
                        this.failBtnClick()}}>apiFailCallButton</button>
                </div>
            </div>
        </Layout>
        )
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
)(reduxExample);