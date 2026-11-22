"use client"

import { useEffect, useState } from "react"

export default function ShowProducts() {

    const [products, setProducts] = useState([]);
    const [newName, setNewname] = useState("");
    const [newPrice, setNewprice] = useState("");

    function fetchProducts() {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(e => console.error(e));
    };

    function handleAddProduct(){
        const lastId = products[products.length - 1].id;

        fetch("http://localhost:3000/api/products", {
            method: "POST", 
            headers: {"content-type": "application/json"},
            body: JSON.stringify({id: lastId+1 , name: newName, price: newPrice})
        })
        .then(fetchProducts())
        .catch(e=>{console.error(e)})
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">

            <div className="max-w-3xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Product List
                </h1>

                <ul className="space-y-4">

                    {products.map((product) => (
                        <li
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm
                            border border-gray-200 p-5
                            flex justify-between items-center
                            hover:shadow-md hover:-translate-y-1
                            transition duration-300"
                        >

                            <span className="text-lg font-medium text-gray-700">
                                {product.name}
                            </span>

                            <span className="text-lg font-bold text-blue-600">
                                ${product.price}
                            </span>

                        </li>
                    ))}

                </ul>

                {products.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No products found.
                    </p>
                )}

            </div>

            
            <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Add New Product
                </h2>

                <div className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Add product name..."
                        value={newName}
                        onChange={(event) => setNewname(event.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-blue-500 transition"
                    />

                    <input
                        type="number"
                        placeholder="Add product price..."
                        value={newPrice}
                        onChange={(event) => setNewprice(event.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-blue-500 transition"
                    />

                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white font-semibold
                        py-3 rounded-lg hover:bg-blue-700
                        active:scale-95 transition duration-200"
                        onClick={()=>{handleAddProduct()
                            setNewname("")
                            setNewprice("")
                        }}
                    >
                        Add Product
                    </button>

                </div>

            </div>


        </div>
    );
}
