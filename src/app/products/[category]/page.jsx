import Link from "next/link";
import { productData } from "../../data";

export default async function productDetails({params}){
    let {category} = await params
    let products = productData[category]

    return (
        <div>
            <h1>This is {category} page</h1>
            {
                products.map((product)=>{
                    return(
                        <li>
                            <Link href={`/products/${category}/${product.name}`}>{product.name}</Link>
                        </li>
                    )
                })
            }
            <Link href="/products">go to products</Link>
        </div>
    )
}