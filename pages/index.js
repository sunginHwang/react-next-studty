import Link from 'next/link'

export default () =>
    <div>
        Welcome to next.js!
        <br/>
        <Link href='/main'>
            <button>메인레이아웃 이동</button>
        </Link>
        <Link href='/reduxExample'>
            <button>리덕스 테스트 연동 테스트</button>
        </Link>
    </div>
