import { useParams } from "react-router-dom";

import { FaChevronDown, FaPlus, FaMinus, FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGetOneProduct } from "../../../hooks/useProducts";
import { useForm } from "../../../hooks/useForm";
import { useGetAllReviews, useCreateReview, useDeleteReview } from "../../../hooks/useReviews";
import { useAuthContext } from "../../../contexts/AuthContext";

const initialValues = {
    review: ''
}

export default function ProductDetails() {
    const { productId } = useParams();
    const [reviews, dispatch] = useGetAllReviews(productId);
    const { email, userId } = useAuthContext()
    const [product] = useGetOneProduct(productId);
    const { isAuthenticated } = useAuthContext();
    const createReview = useCreateReview();
    const deleteReview = useDeleteReview();

    

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ review }) => {
        try {
            const newReview = await createReview(productId, review);

            dispatch({ type: 'CREATE_REVIEW', payload: { ...newReview, author: { email } } });

        } catch (err) {
            console.alert(err.message)
        }
    });



    const handleDeleteReview = (reviewId) => {
        try {
            deleteReview(productId, reviewId);

            dispatch({ type: 'DELETE_REVIEW', payload: reviewId });

        } catch (err) {
            console.error(err.message);
        }
    };

    // const isReviewOwner = email === review.author.email



    return (
        <>
            <div className="relative flex flex-col items-center justify-center lg:h-[60vh] h-[40vh] lg:py-8 py-4 bg-cover bg-fixed" style={{ backgroundImage: 'url(/images/hero-images/products-hero-resized.png)' }}>
                <div className="absolute inset-0 bg-[#D7DAD3] opacity-30"></div>
                <h1 className="relative font-bold lg:text-6xl text-4xl text-black z-10">
                    Product Details
                </h1>
                <div className="relative animate-bounce mt-4 z-10 text-black">
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
                                    alt={`${product.title} image`}
                                    className="w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
                                    alt={`${product.title} image`}
                                    className="w-full h-auto max-h-[144px] object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                    src={`/images/product-images/${product.image}`}
                                    alt={`${product.title} image`}
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
                                    €{product.price}.00
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

            <section className="bg-gray-100 py-12">
                <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                    <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-6">Reviews</h2>

                    <div className="space-y-6 mb-8">
                        {reviews.map(review => (
                            <div key={review._id} className="bg-white p-6 rounded-lg shadow-lg relative">
                                <p className="font-semibold text-lg text-gray-900 mb-2">{review.author.email}</p>
                                <p className="text-gray-700 mb-4">{review.text}</p>
                                {userId === review._ownerId && (
                                    <div className="absolute top-4 right-4 flex gap-2">

                                        <button
                                            onClick={() => handleDeleteReview(review._id)}
                                            className="text-red-600 hover:text-red-800 transition-colors duration-300"
                                        >
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {reviews.length === 0 && (
                            <p className="text-gray-600">Be the first to review "{product.title}"</p>
                        )}
                    </div>

                    {isAuthenticated && (
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-semibold text-xl leading-8 text-gray-900 mb-4">Leave a Review</h3>
                            <form onSubmit={submitHandler} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
                                        Review
                                    </label>
                                    <textarea
                                        id="review"
                                        name="review"
                                        onChange={changeHandler}
                                        value={values.review}
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
                    )}
                </div>
            </section>
        </>
    );
}


{/* <button
    onClick={() => handleEditReview(review._id, prompt("Edit your review:", review.text))}
    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
>
    <FaEdit size={18} />
</button> */}


// const handleEditReview = async (reviewId, updatedReview) => {
//     try {
//         const editedReview = await editReview(productId, reviewId, updatedReview);
//         dispatch({ type: 'EDIT_REVIEW', payload: editedReview });
//     } catch (err) {
//         console.error(err.message);
//     }
// };