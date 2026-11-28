import Link from "next/link";

export default async function ProductDetails({params}){
    const {id} = await params;
    const response = await fetch(`http://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Product Image */}
                    <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-80 object-contain"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="space-y-5">

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {data.title}
                        </h2>

                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-xl">★</span>
                            <span className="text-gray-600">
                                {data.rating?.rate}
                            </span>
                            <span className="text-gray-400 text-sm">
                                ({data.rating?.count} reviews)
                            </span>
                        </div>

                        <p className="text-gray-600 leading-7">
                            {data.description}
                        </p>

                        <p className="text-3xl font-bold text-blue-600">
                            ${data.price}
                        </p>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300">
                            Add to Cart
                        </button>

                        <Link
                            href="/"
                            className="block text-center text-gray-500 hover:text-blue-600 transition pt-3"
                        >
                            ← Back to products
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );

}