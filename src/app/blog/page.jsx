import Link from "next/link";
import { Suspense } from "react";

async function Posts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();

    return(
        <ul>
        {
            posts.map((post)=>(
            <li className="text-blue-500 cursor-pointer" key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
            ))
        }
        </ul>
    )
}

export default function Blog(){
    return(
        <Suspense fallback={<p>Loading posts...</p>}>
            <Posts />
        </Suspense>
    )
}
