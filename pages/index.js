import Link from 'next/link'

export default () =>
    <div>
        Welcome to next.js!
        <br/>
        <Link href='/main'>
            <span>메인레이아웃 이동</span>
        </Link>
    </div>
