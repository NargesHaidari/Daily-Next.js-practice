import ClientComponent from "./components/ClientComponent";
import ShowPosts from "./components/ServerComponent";

export default function Home(){
  return(
    <div>
      <h1 className="text-2xl text-blue-500 m-2">This is srver component</h1>
      <ShowPosts />
      <ClientComponent />
    </div>
  )
}