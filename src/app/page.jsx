async function getUsers(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = response.json()
  return data
}

export default async function showUsers(){
  let users = await getUsers()
  return(
    <ul>
      {
        users.map((user)=>(
          <li key={user.index}>{user.name}</li>
        ))
      }
    </ul>
  )
}