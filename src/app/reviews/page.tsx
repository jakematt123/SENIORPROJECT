// pages/ReviewPage.tsx
"use client"

import React, { useEffect, useState } from 'react';
import { Client } from '../api/Client';

interface Review {
  name: string;
  rating: number;
  comment: string;
  product: string; // New field for the product
}

const ReviewPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [product, setProduct] = useState<string>(''); // State for the product
  const [reviews, setReviews] = useState<Review[]>([]);

useEffect(() => {
    const fetchReviews = async () => {
        try {
            const fetchedReviews = await Client.dbRouter.getReviews.query() as unknown as Review[]; // Specify the type as Review[]
            const reviewsWithProduct = fetchedReviews.map(review => ({ ...review, product: '' })); // Add the 'product' property to each review
            setReviews(reviewsWithProduct); // Set reviews state with fetched data
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

        fetchReviews(); // Call the fetchReviews function on component mount
    }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview: Review = {
      name,
      rating,
      comment,
      product // Assigning the product value to the new review
    };

    const allreviews: Review[] = await Client.dbRouter.getReviews.query() as unknown as Review[]; // Specify the type as Review[]

    setReviews([...allreviews, newReview]); // Spread the returned array into setReviews
    setName('');
    setRating(0);
    setComment('');
    setProduct('');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Leave a Review</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="0">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="product" className="block text-gray-700">Product:</label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit Review</button>
      </form>
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p><strong>Product:</strong> {review.product}</p> {/* Display product */}
                <p><strong>Rating:</strong> {review.rating}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
