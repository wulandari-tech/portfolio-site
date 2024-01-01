import Link from "next/link";
import Image from "next/image";

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
            <ul>
                <li>
                    <a aria-label="Link to GitHub profile (opens in new tab)" href="https://github.com/JamesGJ5" target="_blank">
                        <Image src="/logos/github-mark.svg" alt="" width={50/96*98} height={50} priority/>
                    </a>
                </li>
                <li>
                    <a aria-label="Link to LinkedIn profile (opens in new tab)" href="https://www.linkedin.com/in/james-graca-jones" target="_blank">
                        <Image src="/logos/LI-In-Bug.png" alt="" width={50/540*635} height={50} priority/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}