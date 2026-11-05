import Link from "next/link";

export default function Dashboard(){
    return (
        <div>
            <h1>This is Dashboard page</h1>
            <Link href="/dashboard/setting">Go to Setting</Link>
        </div>
    )
}