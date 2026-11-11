import { Suspense } from "react"

async function GetPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()
    
    return(
        <ul>
            {
                posts.map((post)=>(
                    <li key={post.id} className="bg-gray-200 m-2 p-2" >{post.title}</li>
                ))
            }
        </ul>
    )
} 

export default function ShowPosts(){
    return(
        <Suspense fallback={<p>Loading posts...</p>}>
            <GetPosts />
        </Suspense>
    )
}