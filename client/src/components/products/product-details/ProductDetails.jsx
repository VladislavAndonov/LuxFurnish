import { useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGetOneProduct } from "../../../hooks/useProducts";
import ProductDetailsReviews from "./product-details-reviews/ProductDetailsReviews";

export default function ProductDetails() {
    const { productId } = useParams();
    const [product] = useGetOneProduct(productId);

    return (
        <>
            <section className="relative py-12 bg-gray-100">
                <div className="mx-auto max-w-[1440px] px-4 lg:px-12 mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="relative w-full lg:w-auto">
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.title} image`}
                                    className="w-full max-w-[600px] m-auto h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.title} image`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.title} image}`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.title} image}`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                                {product.title}
                            </h2>
                            <div className="flex items-center mb-6 pb-8 border-b border-gray-100">
                                <h6 className="font-semibold text-2xl leading-9 text-gray-900 mr-5">
                                    € {product.price}
                                </h6>
                            </div>
                            <p className="text-gray-500 text-base font-normal mb-5">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                                <div className="flex items-center justify-center w-full">
                                    <button className="group py-2 px-4 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                        <FaMinus size={18} />
                                    </button>
                                    <input
                                        type="text"
                                        className="font-semibold text-gray-900 cursor-pointer text-lg py-[9px] px-4 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                        placeholder={1}
                                    />
                                    <button className="group py-2 px-4 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                        <FaPlus size={18} />
                                    </button>
                                </div>
                                <button className="group py-3 px-4 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-3 transition-all duration-500 hover:bg-indigo-100">
                                    <AiOutlineShoppingCart size={20} />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ProductDetailsReviews productId={productId} productTitle={product.title} />
        </>
    );
}
