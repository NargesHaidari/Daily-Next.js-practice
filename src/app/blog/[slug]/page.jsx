export async function generateStaticParams(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()
    let ids = posts.map((post)=>(
        {slug:post.id.toString()}
    ))
    return ids
}

export default async function PostDetails({params}){
    let {slug} = await params;
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    let postDetail = await response.json()

    return(
        <div>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.body}</p>
        </div>
    )
}
