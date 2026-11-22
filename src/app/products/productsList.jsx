export default async function ProductsList() {

    let products = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .catch(e => console.error(e));

    return(
        <div>
            <ul>
                {
                    products.map((product, index)=>(
                        <li className="bg-blue-100 mt-3" key={index}>{product.title}</li>
                    ))
                }
            </ul>
        </div>
    )

}