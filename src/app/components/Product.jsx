import Link from "next/link";

export default function Product({product}){
    return(
        <div className="bg-white p-4 m-2  rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">

            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain p-3 mb-4"
            />

            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
            </h2>

            <p className="text-xl font-bold text-blue-600 mb-4">
                ${product.price}
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 mb-3">
                Add to cart
            </button>

            <Link
                href="/"
                className="block text-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
                View more
            </Link>

        </div>
    )
}