import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductsList({ products }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-[1440px] px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map(product => (
                        <div key={product._id} className="mx-auto bg-gray-100 p-4 rounded-lg">
                            <Link to={`/products/${product._id}`} className="block">
                                <div className="relative cursor-pointer">
                                    <img
                                        src={`/images/product-images/${product.image}`}
                                        alt={`${product.title} image`}
                                        className="w-full rounded-xl"
                                    />
                                </div>
                            </Link>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h6 className="font-semibold text-2xl leading-8 text-black group-hover:text-indigo-600">
                                        {product.title}
                                    </h6>
                                    <h6 className="font-semibold text-xl leading-7 text-indigo-600 mt-1">
                                        €{product.price}.00
                                    </h6>
                                </div>
                                <button className="bg-white px-5 rounded-full shadow-lg">
                                    <AiOutlineShoppingCart size={24} className="text-gray-600" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/*
Product on sale

<span
    class="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">20% Off
</span>

*/
