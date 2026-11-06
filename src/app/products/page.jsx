import Link from "next/link";
import { productData } from "../data";

export default function Products(){

  let categories = Object.keys(productData)

  return (
    <div>
      <h1>This is product page</h1>
      <ul>
        {
          categories.map((category)=>{
            return(
              <li>
                <Link href={`/products/${category}`}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
      <Link href="/">Go to Home page</Link>
    </div>
  )
}