import React from 'react'
import Layout from '../component/common/layout/Layout';


const urlRouterExample = ({url}) => {
    console.log(url);
    console.log(this.props);
    return (
        <Layout title='라우터예제'>
            당신이 검색한 키워드는 "{}" 입니다.
        </Layout>
    );
};

export default urlRouterExample;