import Link from "next/link";

export default function notFound(){
    return(
        <div>
            <h1>This page can't be found</h1>
            <Link href={'/'}>Go to homepage</Link>
        </div>
    )
}