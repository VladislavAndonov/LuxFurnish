import { useForm } from "../../../../hooks/useForm";
import { useReviews } from "../../../../hooks/useReviews";
import {
    useAddReview,
    useDeleteReview,
    useEditReview,
} from "../../../../hooks/useReviews";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const initialValues = {
    comment: "",
};

export default function ProductDetailsReviews({ productId, productTitle }) {
    const { reviews, add, remove, update } = useReviews(productId);

    const { email, userId, isAuthenticated } = useAuthContext();

    const createReview = useAddReview();
    const deleteReview = useDeleteReview();
    const editReview = useEditReview();

    const {
        changeHandler,
        submitHandler,
        values,
        setFormValues,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            if (values._id) {
                const updatedReview = await editReview(
                    values._id,
                    productId,
                    null, // Rating
                    comment
                );

                update(updatedReview);
            } else {
                const newReview = await createReview(
                    productId,
                    null, // Rating
                    comment
                );

                add({ ...newReview, author: { email } });
            }

            setFormValues(initialValues);
        } catch (err) {
            console.error(err.message);
        }
    });

    const handleDeleteReview = async (reviewId) => {
        if (!window.confirm("Are you sure you want to delete this review?")) return;

        try {
            await deleteReview(reviewId);
            remove(reviewId);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleEditReview = (review) => {
        setFormValues({
            comment: review.comment,
            _id: review._id,
        });
    };

    const handleCancelEdit = () => {
        setFormValues(initialValues);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                <h2 className="font-bold text-4xl text-gray-900 mb-8">
                    Customer Reviews
                </h2>

                <div className="space-y-8 mb-12">
                    {reviews.map(review => (
                        <div
                            key={review._id}
                            className={`bg-white p-6 rounded-lg shadow-lg relative ${
                                values._id === review._id
                                    ? "ring-4 ring-[#93B685]"
                                    : ""
                            }`}
                        >
                            <p className="font-semibold text-lg mb-2">
                                {review.author?.email}
                            </p>

                            <p className="text-gray-700 mb-4">
                                {review.comment}
                            </p>

                            {userId === review._ownerId && (
                                <div className="absolute top-4 right-4 flex gap-4">
                                    <button onClick={() => handleEditReview(review)}>
                                        <FaEdit size={20} />
                                    </button>

                                    <button onClick={() => handleDeleteReview(review._id)}>
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}

                    {reviews.length === 0 && (
                        <p className="text-gray-600 text-lg">
                            Be the first to review "{productTitle}"
                        </p>
                    )}
                </div>

                {isAuthenticated && (
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-[#76A763] mb-6">
                            {values._id ? "Edit Your Review" : "Write a Review"}
                        </h3>

                        <form onSubmit={submitHandler} className="space-y-6">
                            <textarea
                                name="comment"
                                onChange={changeHandler}
                                value={values.comment}
                                className="w-full px-4 py-3 border rounded-lg"
                                rows="5"
                                required
                            />

                            <div className="flex gap-4">
                                <button type="submit" className="px-6 py-2 bg-[#76A763] text-white rounded-full">
                                    {values._id ? "Update" : "Submit"}
                                </button>

                                {values._id && (
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="px-6 py-2 bg-gray-500 text-white rounded-full"
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