import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../core/lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {

    render () {
        const {Component, pageProps, reduxStore} = this.props;
        console.log(this.props);
        return (
            <Container>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <Provider store={reduxStore}>
                    <Component {...this.props} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)
