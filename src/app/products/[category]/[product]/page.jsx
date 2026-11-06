import { productData } from "../../../data"

export default async function productDetails({params}){

    let {category, product} = await params
    let productDetails = productData[category].find(
        (p)=>p.name == product
    )

    return(
        <div>
            <h1>These are {product} details</h1>
            <h2>{productDetails.name}</h2>
            <p>{productDetails.price}</p>
        </div>
    )
}