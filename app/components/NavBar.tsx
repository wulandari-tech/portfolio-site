import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Index</Link>
                </li>
                <li>
                    <Link href={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link href={'/open-source'}>Open Source</Link>
                </li>
                <li>
                    <Link href={'/certifications'}>Certifications</Link>
                </li>
            </ul>
        </nav>
    )
}