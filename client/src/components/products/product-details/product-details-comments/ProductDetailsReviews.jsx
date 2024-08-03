import { useState } from "react";

export default function ProductDetailsReviews() {
    const [reviews, setReviews] = useState([
        {
            username: "John Doe",
            review: "Great product! Highly recommend it.",
        },
    ]);
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (username && review) {
            setReviews([...reviews, { username, review }]);
            setUsername("");
            setReview("");
        }
    };

    return (
        <section className="bg-gray-100 py-8 px-4 lg:px-12">
            <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
                <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-6">Reviews</h2>
                
                <div className="space-y-4 mb-8">
                    {reviews.map((c, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <p className="font-semibold text-lg text-gray-900">{c.username}</p>
                            <p className="text-gray-700">{c.review}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-xl leading-8 text-gray-900 mb-4">Leave a Review</h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
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
    );
};
