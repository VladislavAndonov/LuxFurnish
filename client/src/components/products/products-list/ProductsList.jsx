import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function ProductsList({ products }) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-[1440px] px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map(product => (
                        <div key={product._id} className="relative bg-[#D7DAD3] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">

                            {/* Product Image */}
                            <Link to={`/products/${product._id}`} className="block">
                                <div className="relative cursor-pointer">
                                    <img
                                        src={`/images/product-images/${product.image}`}
                                        alt={`${product.title} image`}
                                        className="w-full h-auto aspect-1 object-cover rounded-xl"
                                    />
                                </div>
                            </Link>

                            {/* Product Info */}
                            <div className="mt-6">
                                <h6 className="font-semibold text-2xl text-black">
                                    {product.title}
                                </h6>
                                <div className="flex items-center justify-between mt-2">
                                    <h6 className="font-semibold text-xl text-[#76A763]">
                                        € {product.price}
                                    </h6>
                                    <div className="flex items-center">
                                        {/* Rating Stars */}
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`text-[#FFC107] ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                size={16}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[#656565] text-md mt-4">
                                    {product.description.slice(0, 80)}...
                                </p>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="mt-6 flex justify-between items-center">
                                <button className="flex items-center justify-center bg-[#76A763] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#93B685] transition-colors duration-200 ease-in-out">
                                    <AiOutlineShoppingCart size={20} className="mr-2" />
                                    Add to Cart
                                </button>
                                <Link to={`/products/${product._id}`} className="text-[#76A763] hover:text-[#93B685] transition-colors duration-200 ease-in-out">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
