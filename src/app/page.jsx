import Products from "./components/Products";

export default async function Home(){
  const res = await fetch("http://fakestoreapi.com/products");
  const products = await res.json();

  return(
    <div>
      <Products products={products} />
    </div>
  )
}