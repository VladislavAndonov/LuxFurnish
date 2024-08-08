// import { useState } from "react";
// import reviewsApi from "../../../api/reviews-api";

// const ProductReviews = ({ product, productId }) => {
//     const [username, setUsername] = useState("");
//     const [review, setReview] = useState("");

//     const reviewSubmitHandler = async (e) => {
//         e.preventDefault();

//         const newReview = await reviewsApi.create(productId, username, review);

//         setProduct((prevState) => ({
//             ...prevState,
//             reviews: {
//                 ...prevState.reviews,
//                 [newReview._id]: newReview,
//             },
//         }));

//         setUsername("");
//         setReview("");
//     };

//     return (
//         <section className="bg-gray-100 py-8 px-4 lg:px-12">
//             <div className="mx-auto max-w-[1440px] px-4 lg:px-12">
//                 <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-6">Reviews</h2>

//                 {Object.keys(product.reviews || {}).length > 0 ? (
//                     <div className="space-y-4 mb-8">
//                         {product.reviews &&
//                             Object.values(product.reviews).map((review) => (
//                                 <div key={review._id} className="bg-white p-4 rounded-lg shadow">
//                                     <p className="font-semibold text-lg text-gray-900">{review.username}</p>
//                                     <p className="text-gray-700">{review.review}</p>
//                                 </div>
//                             ))}
//                     </div>
//                 ) : (
//                     <p>Be the first to review "{product.title}"</p>
//                 )}

//                 <div className="bg-white p-6 rounded-lg shadow">
//                     <h3 className="font-semibold text-xl leading-8 text-gray-900 mb-4">Leave a Review</h3>
//                     <form onSubmit={reviewSubmitHandler} className="space-y-4">
//                         <div>
//                             <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
//                                 Review
//                             </label>
//                             <textarea
//                                 id="review"
//                                 value={review}
//                                 onChange={(e) => setReview(e.target.value)}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 rows="4"
//                                 required
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-indigo-700"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductReviews;