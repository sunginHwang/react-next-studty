import Link from 'next/link'

export default () =>
    <div>
        Welcome to next.js!
        <br/>
        <Link href='/main'>
            <span>메인레이아웃 이동</span>
        </Link>
        <Link href='/reduxExample'>
            <span>리덕스 테스트 연동 테스트</span>
        </Link>
    </div>
