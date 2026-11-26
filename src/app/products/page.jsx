"use client"

import { useEffect, useState, useRef } from "react"

export default function Products(){

    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getProducts(){

        if(loading || !hasMore) return;

        setLoading(true);

        try{
            const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${skip}`);
            const data = await response.json();
            setProducts([...products, ...data.products]);
            setSkip(prev => prev + data.products.length);
            setHasMore(skip + data.products.length < data.total);
        }catch(e){
            console.error(e)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProducts();
    }, [])

    return(
        <div className="p-6">
            <h1 className="text-3xl bg-red-100 rounded p-3">Products List</h1>
            <ul>
                {
                    products.map(product=>(
                        <li className="mt-2 bg-blue-100 p-1 rounded" key={product.id}>
                            <h2>{product.title}</h2>
                            <p>${product.price}</p>
                        </li>
                    ))
                }
            </ul>
            <div onClick={()=>{getProducts()}} className="bg-green-100 rounded p-2 rounded mt-2 inline-flex cursor-pointer hover:bg-green-200 active:bg-green-300 transition-all">Load more...</div>
        </div>
    )
}