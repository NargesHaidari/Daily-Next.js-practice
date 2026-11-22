import { Suspense } from "react";
import ProductsList from "./productsList";

export default async function ShowProducts() {

    return(
        <div>
            <h1 className="text-2xl text-red-500">Products</h1>
            <Suspense fallback={<p className="text-6xl bg-red-100">Loading...</p>}>
                <ProductsList/>
            </Suspense>
        </div>
    )

}