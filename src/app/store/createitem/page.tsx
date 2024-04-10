"use client"

import React, { useState } from 'react';
import { Client } from '~/app/api/Client';

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = () => {
    const [productName, setProductName] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    interface image {
        data: Uint8Array;
        mimeType: string;
    }

    async function imageToBinary(file, mimeType) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = () => {
                const arrayBuffer = reader.result;
                const binaryArray = new Uint8Array(arrayBuffer as ArrayBuffer);
                
                resolve({ data: binaryArray, mimeType: mimeType });
            };
    
            reader.onerror = (error) => {
                reject(error);
            };
    
            reader.readAsArrayBuffer(file);
        });
    }
    

    function binaryToImage(binaryData, mimeType) {
        // Create a Blob from the binary data
        const blob = new Blob([binaryData], { type: mimeType });
    
        // Create a URL representing the Blob
        const imageUrl = URL.createObjectURL(blob);
    
        // Create an image element
        const img = new Image();
    
        // Set the image source to the URL
        img.src = imageUrl;
    
        // Return the image element
        return img as HTMLImageElement;
    }
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ productName, quantity, price, image });
        if (!image) return;
        const imageBinary = await imageToBinary(image, image.type);
        const imageData: Uint8Array = (imageBinary as image).data;
        console.log(imageData);

        await Client.dbRouter.createItem.mutate({
            name: productName,
            description: description,
            price: parseFloat(price),
            image: { data: imageData, mimeType: (imageBinary as image).mimeType },
            quantity: parseInt(quantity)
        });
    };

    async function reconstructImage() {
        if(!image) return;
        const data = await Client.dbRouter.uploadImage.mutate({
            Bucket: "usfseniorproject2024",
            Key: image.name,
            Body: image,
            ACL: "private",
            Metadata: {
                "x-amz-meta-my-key": "your-value"
            }
        });
        console.log(data);
        //const img = binaryToImage(data, data?.type);
        // Append the image element to the document body

    }


 return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Product Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">Product Name</label>
                    <input type="text" id="name" name="name" value={productName} onChange={(e) => setProductName(e.target.value)} className="form-input w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-600 font-semibold mb-1">Quantity</label>
                    <input type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-input w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-600 font-semibold mb-1">Price</label>
                    <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-600 font-semibold mb-1">Description</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="form-input w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-600 font-semibold mb-1">Image Upload</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="form-input w-full" />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                </div>
            </form>
            <button onClick={()=>reconstructImage()}>Reconstruct image</button>
        </div>
    );
};

export default ProductForm;