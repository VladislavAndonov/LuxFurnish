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

export default function Reviews({ productId, productTitle }) {
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
                <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-6">Reviews</h2>

                <div className="space-y-6 mb-8">
                    {reviews.map(review => (
                        <div
                            key={review._id}
                            className={`bg-white p-6 rounded-lg shadow-lg relative ${values._id === review._id ? 'ring-4 ring-indigo-300' : ''}`} // Highlight if being edited
                        >
                            <p className="font-semibold text-lg text-gray-900 mb-2">{review.author.email}</p>
                            <p className="text-gray-700 mb-4">{review.text}</p>
                            {userId === review._ownerId && (
                                <div className="absolute top-4 right-4 flex gap-4">
                                    <button
                                        onClick={() => handleEditReview(review)}
                                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                    >
                                        <FaEdit size={22} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteReview(productId, review._id)}
                                        className="text-red-600 hover:text-red-800 transition-colors duration-300"
                                    >
                                        <FaTrashAlt size={22} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    {reviews.length === 0 && (
                        <p className="text-gray-600">Be the first to review "{productTitle}"</p>
                    )}
                </div>

                {isAuthenticated && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-xl leading-8 text-gray-900 mb-4">
                            {values._id ? "Edit Review" : "Leave a Review"}
                        </h3>
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
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-indigo-700"
                                >
                                    {values._id ? "Update" : "Submit"}
                                </button>
                                {values._id && (
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-700"
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
