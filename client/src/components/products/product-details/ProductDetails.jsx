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
            {/* Product Details Section */}
            <section className="relative py-12 bg-[#f5f5f5]">
                <div className="mx-auto max-w-[1440px] px-4 lg:px-12 mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        
                        {/* Product Images Section */}
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
                        
                        {/* Product Details Section */}
                        <div className="lg:col-span-2 flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="font-bold text-4xl leading-10 text-gray-900 mb-4 capitalize">
                                {product.title}
                            </h2>
                            <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                                <h6 className="font-semibold text-3xl leading-9 text-[#76A763] mr-5">
                                    € {product.price}
                                </h6>
                            </div>
                            <p className="text-gray-700 text-base font-normal pb-6 border-b border-gray-200">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
                                <div className="flex items-center justify-center w-full">
                                    <button className="group py-4 px-4 border border-gray-300 rounded-l-xl bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-sm">
                                        <FaMinus size={18} />
                                    </button>
                                    <input
                                        type="text"
                                        className="font-semibold text-gray-900 cursor-pointer text-lg py-[11px] px-4 w-full sm:max-w-[118px] outline-0 border-y border-gray-300 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                        placeholder={1}
                                    />
                                    <button className="group py-4 px-4 border border-gray-300 rounded-r-xl bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-sm">
                                        <FaPlus size={18} />
                                    </button>
                                </div>
                                <button className="group py-3 px-6 rounded-xl bg-[#76A763] text-white font-semibold text-lg w-full flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[#93B685]">
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
