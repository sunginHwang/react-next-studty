import Link from 'next/link';
import Layout from '../component/common/layout/Layout';

export default () =>
    <Layout>
        Welcome to next.js!
        <br/>
        <Link href='/main?name=sungin'>
            <button>메인레이아웃 이동</button>
        </Link>
        <Link href='/reduxExample' replace>
            <button>리덕스 테스트 연동 테스트 리플ㄹ</button>
        </Link>
        <Link href='/reduxExample'>
            <button>리덕스 테스트 연동 테스트</button>
        </Link>
        <Link href='/urlRouterExample?id=sungin'>
            <button>라우트 연동 테스트</button>
        </Link>

        <a href='/urlRouterExample?id=sungin'>
            <button>라우트 연동 테스트</button>
        </a>

    </Layout>
