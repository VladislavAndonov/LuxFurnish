import { useForm } from "../../../../hooks/useForm";
import { useGetAllReviews, useCreateReview, useDeleteReview } from "../../../../hooks/useReviews";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteReviewModal from "../../../confirmation-modals/DeleteReviewModal";
import EditReviewModal from "../../../confirmation-modals/EditReviewModal";

const initialValues = {
    review: ''
};

export default function ProductDetailsReviews({ productId, productTitle }) {
    const [reviews, dispatch] = useGetAllReviews(productId);
    const { email, userId, isAuthenticated } = useAuthContext();
    const createReview = useCreateReview();
    const deleteReview = useDeleteReview();
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [reviewToEdit, setReviewToEdit] = useState(null);

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ review }) => {
        try {
            const newReview = await createReview(productId, review);
            dispatch({ type: 'CREATE_REVIEW', payload: { ...newReview, author: { email } } });

            return true; // Return true if successful
        } catch (err) {
            console.error(err.message);
            return false; // Return false if there's an error
        }
    });

    const confirmDeleteReview = (reviewId) => {
        setReviewToDelete(reviewId);
        setModalOpen(true);
    };

    const handleDeleteReview = async () => {
        try {
            await deleteReview(productId, reviewToDelete);
            dispatch({ type: 'DELETE_REVIEW', payload: reviewToDelete });
            setModalOpen(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleCancelDelete = () => {
        setModalOpen(false);
        setReviewToDelete(null);
    };

    const openEditModal = (review) => {
        setReviewToEdit(review);
        setEditModalOpen(true);
    };

    const handleEditReview = async (updatedReviewText) => {
        try {
            const editedReview = await editReview(productId, reviewToEdit._id, updatedReviewText);
            dispatch({ type: 'EDIT_REVIEW', payload: editedReview });
            setEditModalOpen(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleCancelEdit = () => {
        setEditModalOpen(false);
        setReviewToEdit(null);
    };

    return (
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
                                        onClick={() => confirmDeleteReview(review._id)}
                                        className="text-red-600 hover:text-red-800 transition-colors duration-300"
                                    >
                                        <FaTrashAlt size={24} />
                                    </button>

                                    <button
                                        onClick={() => openEditModal(review)}
                                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                    >
                                        <FaEdit size={24} />
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

            <DeleteReviewModal
                isOpen={modalOpen}
                onConfirm={handleDeleteReview}
                onCancel={handleCancelDelete}
                message="Are you sure you want to delete this review?"
            />

            <EditReviewModal
                isOpen={editModalOpen}
                onConfirm={handleEditReview}
                onCancel={handleCancelEdit}
                initialReview={reviewToEdit ? reviewToEdit.text : ''}
            />
        </section>
    );
}