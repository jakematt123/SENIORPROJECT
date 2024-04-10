import React from "react"


const PreviousPurchase = () => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-3/4 mx-auto mt-8">
            <h2 className="text-2xl mb-4">Your Purchases</h2>
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg text-gray-600">
                    Your purchase history here.
                </p>
            </div>
            {/* Add cart items and other content here */}
        </div>
    );
}




export default PreviousPurchase;