import Link from "next/link";

const allProducts = [
  { id: 1, name: "iPhone 15", price: 800 },
  { id: 2, name: "Samsung Galaxy S24", price: 900 },
  { id: 3, name: "MacBook Pro", price: 2000 },
  { id: 4, name: "Dell XPS 15", price: 1500 },
  { id: 5, name: "AirPods Pro", price: 250 },
  { id: 6, name: "Sony WH-1000XM5", price: 350 },
  { id: 7, name: "iPad Air", price: 600 },
  { id: 8, name: "Samsung Tab S9", price: 700 },
  { id: 9, name: "Apple Watch Series 9", price: 400 },
  { id: 10, name: "Samsung Galaxy Watch 6", price: 300 },
  { id: 11, name: "Logitech MX Master 3S", price: 100 },
  { id: 12, name: "Asus ROG Strix", price: 1800 },
];

export default async function ShowProducts({searchParams}){

    let ppg = 3;
    let currentPage = await searchParams;
    let page = Number(currentPage.page) || 1;
    let products = allProducts.slice((page-1) * ppg, page * ppg);
    let maxPage = allProducts.length / ppg;

    function countPpage(){
        let p = page-1;
        if(p==0){
            return p = 1;
        }
        return p;
    }

    function countNpage(){
        let p = page+1;
        if(p > maxPage){
            p = maxPage;
        }
        return p;
    }
    
    return(
        <div className="p-6">
            <h1 className="text-4xl bg-red-100 rounded p-1 text-red-600">Products</h1>
            <ul>
                {
                    products.map(p=>(
                        <li className="mt-3 p-1 rounded bg-blue-100" key={p.id}>{p.name} --- {p.price}</li>
                    ))
                }
            </ul>
            <Link href={`?page=${countPpage()}`} className="bg-red-100 py-1 px-3 hover:bg-red-200 active:bg-red-300 transition-all cursor-pointer rounded text-2xl inline-flex mt-5">Prev</Link>
            <span> --- </span>
            <Link href={`?page=${countNpage()}`} className={`bg-red-100 py-1 px-3 hover:bg-red-200 active:bg-red-300 transition-all cursor-pointer rounded text-2xl inline-flex mt-5`}>Next</Link>
        </div>
    )
}