import React from "react"


const ShoppingCart = () => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-3/4 mx-auto mt-8">
            <h2 className="text-2xl mb-4">Your Shopping Cart</h2>
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg text-gray-600">
                    Your shopping cart is currently empty. Please add items to your cart.
                </p>
            </div>
            {/* Add cart items and other content here */}
        </div>
    );
}




export default ShoppingCart;