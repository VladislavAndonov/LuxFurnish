import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function EditReviewModal({ isOpen, onConfirm, onCancel, initialReview }) {
    const [reviewText, setReviewText] = useState(initialReview);

    useEffect(() => {
        if (isOpen) {
            setReviewText(initialReview);
        }
    }, [isOpen, initialReview]);

    const handleChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleSubmit = () => {
        onConfirm(reviewText);
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h3 className="text-gray-800 text-lg mb-4">Edit your review</h3>
                <textarea
                    value={reviewText}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="4"
                />
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}