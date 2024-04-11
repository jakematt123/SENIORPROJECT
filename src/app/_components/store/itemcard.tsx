"use client"

import React from 'react';
import { Button, Card } from '../ClientExports';


export const DiscountedItem = ({ originalPrice, discountedPrice }) => {
    return (
      <div className="flex items-center space-x-2  text-black font-bold text-lg">
        <span className="line-through text-orange-500">${originalPrice}</span>
        <span className="font-bold">${discountedPrice}</span>
      </div>
    );
};

const ReviewStars = ({rating, reviewCount}) => {
    return ( 
        <div className="flex items-center mb-2">
                <svg className="w-4 h-4 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{reviewCount} reviews</a>
        </div>
    );
}

interface ItemCardProps {
    image: JSX.Element;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

export const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card placeholder={undefined}>
                <div className='object-scale-down'>{props.image}</div>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    <ReviewStars rating={4.96} reviewCount={22}/>
                    <p className="text-gray-700 mb-4">
                        {props.description}
                    </p>
                    <div className='relative'>
                        <p className="text-lg font-bold">${props.price}</p>
                        <Button color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;