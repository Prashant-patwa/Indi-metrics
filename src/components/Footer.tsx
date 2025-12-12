import Link from "next/link"

export function Footer() {
    return(
        <div>
            <p> Hi this is my demo footer</p>
<Link href="/data">Data Sources</Link>
<Link href="terms-of-service">terms of service</Link>
        </div>
    )
}