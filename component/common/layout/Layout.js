import Head from 'next/head';
import Router from 'next/router'
import React from "react";
import PageLoading from '../loading/PageLoading/PageLoading';

Router.onRouteChangeStart = (url) => {
    console.log(`route: ${url}`)
}

export default class ReduxExampleContainer extends React.Component {
    constructor(...args) {
        super(...args);
        console.log('constructor');
        this.state = { pageLoading: true }
    }

    componentDidMount() {
        this.loadingComplete();
    }

    loadingComplete() {
        setTimeout(()=>{
            this.setState({ pageLoading: false });
        }, 500);

    }

    render() {


        return(
            <div>
                <Head>
                    <title>{ this.props.title }</title>
                    <meta charSet='utf-8' />
                    <link rel="icon" href="/static/mrhFa.ico" type="icon" />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <PageLoading loading={this.state.pageLoading}/>

                {  this.props.children
                }
            </div>
        )
    }
}
