import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>This is home page</h1>
      <Link className="text-red-500" href="/blog">go to blog page</Link>
    </div>
  )
}