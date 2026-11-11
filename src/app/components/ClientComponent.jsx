"use client"

import { useState } from "react"

export default function ClientComponent(){
    let [counter, setCounter] = useState(0);

    return(
       <div>
            <h1 className="text-2xl text-blue-500">This is client component</h1>
            <p>The amount of counter is: {counter}</p>
            <button className="p-3 bg-blue-300" onClick={()=>{setCounter(counter+1)}}>Add to counter</button>
       </div>
    )
}