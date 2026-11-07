import { Suspense } from "react";
import { productData } from "../../data";
import Link from "next/link";

export default function AllSlugs({ params }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SlugContent params={params} />
        </Suspense>
    );
}

async function SlugContent({ params }) {
    const { slug } = await params;
    
    if(slug.length == 1){
        let category = slug[0];
        let products = productData[category];

        return(
            <div>
                {
                    products.map(
                        (p)=>{
                            return(
                                <li>
                                    <Link href={`/products/${category}/${p.name}`}>{p.name}</Link>
                                </li>
                            )
                        }
                    )
                }
            </div>
        )
    }

    if(slug.length == 2){
        let [category , product] = slug;
        let productDetails = productData[category].find((p)=> p.name == product)

        return (
            <div>
                <h1>{productDetails.name}</h1>
                <p>{productDetails.price}</p>
            </div>
        )
    }
}