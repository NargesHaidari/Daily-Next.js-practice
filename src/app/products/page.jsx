"use client"

import { useEffect, useState, useRef } from "react"

export default function Products(){

    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMoreRef = useRef(null);
    const skipRef = useRef(0);
    const hasMoreRef = useRef(true);
    const loadingRef = useRef(false);

    async function getProducts(){

        if(loadingRef.current || !hasMoreRef.current) return;

        loadingRef.current = true;
        setLoading(true);

        try{
            const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${skipRef.current}`);
            if(!response.ok){
                throw new Error("Failed to fetch products")
            }
            const data = await response.json();

            setProducts(prev => {
                const existingIds = new Set(prev.map(p => p.id));

                const newProducts = data.products.filter(
                    product => !existingIds.has(product.id)
                )

                return [...prev, ...newProducts]
            });

            skipRef.current += data.products.length;

            const more = skipRef.current < data.total;

            hasMoreRef.current = more;
            setHasMore(more);

        }catch(e){
            console.error(e)
        }finally{
            loadingRef.current = false;
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProducts();
    }, [])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                getProducts();
            }
        })
    })

    if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();

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
            <div ref={loadMoreRef} className="bg-green-100 rounded p-2 rounded mt-2 inline-flex cursor-pointer">
                {loading ? "Loading..." : hasMore ? "Load more..." : "No more products"}
            </div>
        </div>
    )
}