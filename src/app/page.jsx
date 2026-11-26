import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1 className="text-2xl text-blue-500">This is home page</h1>
      <Link href="/products">go to product page</Link>
    </div>
  )
}