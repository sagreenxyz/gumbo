import Link from 'next/link'

export default function Home() {
    return (
        <ul>
        <li>
            <Link href="/posts/abc">
                <a>Go to pages/posts/[id].js</a>
            </Link>
        </li>
            <li>
                <Link href="/posts/abc?foo=bar">
                    <a>Also goes to pages/posts/[id].js</a>
                </Link>
            </li>
            <li>
                <Link href="/posts/abc/a-comment">
                    <a>Go to pages/posts/[id]/[comment].js</a>
                </Link>
            </li>
        </ul>
    )
}
