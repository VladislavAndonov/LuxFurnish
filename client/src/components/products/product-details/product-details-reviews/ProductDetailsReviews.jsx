import { useForm } from "../../../../hooks/useForm";
import {
    useGetAllReviews,
    useCreateReview,
    useDeleteReview,
    useEditReview,
} from "../../../../hooks/useReviews";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const initialValues = {
    review: '',
};

export default function ProductDetailsReviews({ productId, productTitle }) {
    const [reviews, dispatch] = useGetAllReviews(productId);
    const { email, userId, isAuthenticated } = useAuthContext();
    const createReview = useCreateReview();
    const deleteReview = useDeleteReview();
    const editReview = useEditReview();

    const {
        changeHandler,
        submitHandler,
        values,
        setFormValues,
    } = useForm(initialValues, async ({ review }) => {
        try {
            if (values._id) {
                const updatedReview = await editReview(productId, values._id, review);
                dispatch({ type: 'EDIT_REVIEW', payload: updatedReview });
            } else {
                const newReview = await createReview(productId, review);
                dispatch({ type: 'CREATE_REVIEW', payload: { ...newReview, author: { email } } });
            }
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    });

    const handleDeleteReview = async (productId, reviewId) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            try {
                await deleteReview(productId, reviewId);
                dispatch({ type: 'DELETE_REVIEW', payload: reviewId });
            } catch (err) {
                console.error(err.message);
            }
        }
    };

    const handleEditReview = (review) => {
        setFormValues({ review: review.text, _id: review._id });
    };

    const handleCancelEdit = () => {
        setFormValues(initialValues);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                <h2 className="font-bold text-4xl text-gray-900 leading-10 mb-8">Customer Reviews</h2>

                <div className="space-y-8 mb-12">
                    {reviews.map(review => (
                        <div
                            key={review._id}
                            className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${values._id === review._id ? 'ring-4 ring-[#93B685]' : ''}`} // Highlight if being edited
                        >
                            <p className="font-semibold text-lg text-gray-900 mb-2">{review.author.email}</p>
                            <p className="text-gray-700 text-base leading-relaxed mb-4">{review.text}</p>
                            {userId === review._ownerId && (
                                <div className="absolute top-4 right-4 flex gap-4">
                                    <button
                                        onClick={() => handleEditReview(review)}
                                        className="text-[#76A763] hover:text-[#93B685] transition-colors duration-300"
                                    >
                                        <FaEdit size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteReview(productId, review._id)}
                                        className="text-red-600 hover:text-red-800 transition-colors duration-300"
                                    >
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    {reviews.length === 0 && (
                        <p className="text-gray-600 text-lg">Be the first to review "{productTitle}"</p>
                    )}
                </div>

                {isAuthenticated && (
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-2xl leading-8 text-[#76A763] mb-6">
                            {values._id ? "Edit Your Review" : "Write a Review"}
                        </h3>
                        <form onSubmit={submitHandler} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
                                    Your Review
                                </label>
                                <textarea
                                    id="review"
                                    name="review"
                                    onChange={changeHandler}
                                    value={values.review}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76A763]"
                                    rows="5"
                                    placeholder="Share your thoughts..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="py-2.5 px-6 bg-[#76A763] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#93B685]"
                                >
                                    {values._id ? "Update Review" : "Submit Review"}
                                </button>
                                {values._id && (
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="py-2.5 px-6 bg-gray-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}
