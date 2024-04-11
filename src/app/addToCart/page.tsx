// pages/ReviewPage.tsx
"use client"

import React, { useState } from 'react';
import { Client } from '../api/Client';

interface Cart {
  quantity: number;
  product: string; // New field for the product
}

const ReviewPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [product, setProduct] = useState<string>(''); // State for the product


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCart: Cart = {
        quantity,
        product // Assigning the product value to the new review
    };

    void await Client.dbRouter.createCart.mutate(
      newCart
    ); // Pass newCart as an argument

};

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Item To Cart</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Product:</label>
          <input
            type="text"
            id="name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
            <label htmlFor="product" className="block text-gray-700">Quantity</label>
            <input
                type="number"
                id="product"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
            />
        </div>
        <div>

        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default ReviewPage;
