import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import furnitureAPI from "../../../api/furniture-api";
import { FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import reviewsApi from "../../../api/reviews-api";

export default function ProductDetails() {
    const [product, setProduct] = useState({});

    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");

    const { productId } = useParams();

    useEffect(() => {
        fetchCurrentProduct();
    }, [productId]);

    const fetchCurrentProduct = async () => {
        const result = await furnitureAPI.getOne(productId);
        setProduct(result);
    }


    const reviewSubmitHandler = async (e) => {
        e.preventDefault();

        await reviewsApi.create(productId, username, review)

        fetchCurrentProduct()

        setUsername("");
        setReview("");
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[50vh] h-[35vh] lg:py-8 py-4 bg-[#D7DAD3]">
                <h1 className="font-semibold mt-[2em] lg:text-6xl text-5xl">
                    Product details
                </h1>
                <div className="animate-bounce mt-4">
                    <FaChevronDown size={25} />
                </div>
            </div>

            <section className="relative py-12 bg-gray-100">
                <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3 flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="relative w-full lg:w-auto">
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.name} image`}
                                    className="w-full h-auto max-h-[70vh] object-cover rounded-lg"
                                />
                            </div>
                            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.name} image`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer"
                                />
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.name} image`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer"
                                />
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.name} image`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                                {product.name}
                            </h2>
                            <div className="flex items-center mb-6 pb-8 border-b border-gray-100">
                                <h6 className="font-semibold text-2xl leading-9 text-gray-900 mr-5">
                                    {product.price}
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

            {/* Comment Section */}

            <section className="bg-gray-100 py-8 px-4 lg:px-12">
                <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                    <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-6">Reviews</h2>



                    {Object.keys(product.reviews || {}).length > 0
                        ? <div className="space-y-4 mb-8">
                            {product.reviews && Object.values(product.reviews).map(review => (
                                <div key={review._id} className="bg-white p-4 rounded-lg shadow">
                                    <p className="font-semibold text-lg text-gray-900">{review.username}</p>
                                    <p className="text-gray-700">{review.text}</p>
                                </div>
                            ))}
                        </div>
                        : <p>Be the first to review "{product.name}"</p>
                    }

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-xl leading-8 text-gray-900 mb-4">Leave a Review</h3>
                        <form onSubmit={reviewSubmitHandler} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
                                    Review
                                </label>
                                <textarea
                                    id="review"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}


/*
Star Rating

<svg
width={20}
height={20}
viewBox="0 0 20 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clipPath="url(#clip0_12029_1640)">
    <path
        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        fill="#FBBF24"
    />
</g>
<defs>
    <clipPath id="clip0_12029_1640">
        <rect width={20} height={20} fill="white" />
    </clipPath>
</defs>
</svg>

*/