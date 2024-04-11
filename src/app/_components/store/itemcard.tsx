"use client"

import React, { useCallback, useState } from 'react';
import { Button, Card } from '../ClientExports';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import { StaticImageData } from 'next/image';
import { Client } from '~/app/api/Client';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { handleCLick } from '~/app/store/page';
import { useRouter } from 'next/navigation';

const router = useRouter();

export const DiscountedItem = ({ originalPrice, discountedPrice }) => {
    return (
      <div className="flex items-center space-x-2  text-black font-bold text-lg">
        <span className="line-through text-orange-500">${originalPrice}</span>
        <span className="font-bold">${discountedPrice}</span>
      </div>
    );
};


export async function addToCart(id: string, quantity: number, userId: string) {
    Client.dbRouter.addToCart.mutate({
        itemId: id,
        quantity: quantity,
        userId: userId
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}


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
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
}

interface DiscountedCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    price: number;
    quantity: number;
    newprice: number;
}

const onClick = async () => {
    alert("Item added to cart!")
}

export const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback(shouldZoom => {
      setIsZoomed(shouldZoom)
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card placeholder={undefined}>
                    <div onClick={()=>handleZoomChange} className='object-scale-down'>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img src={props.image} alt={props.title} className="object-scale-down w-full h-40" />
                        </ControlledZoom>
                    </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    <ReviewStars rating={4.96} reviewCount={22}/>
                    <p className="text-gray-700 mb-4">
                        {props.description}
                    </p>
                    <div className='relative'>
                        <p className="text-lg font-bold">${props.price}</p>
                        <Button onClick={()=>onClick()} color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};



export const DiscountedCard: React.FC<DiscountedCardProps> = (props: DiscountedCardProps) => {

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback(shouldZoom => {
      setIsZoomed(shouldZoom)
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card placeholder={undefined}>
                    <div onClick={()=>handleZoomChange} className='object-scale-down'>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img src={props.image.src} alt={props.title} className="object-scale-down w-full h-40" />
                        </ControlledZoom>
                    </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    <ReviewStars rating={4.96} reviewCount={22}/>
                    <p className="text-gray-700 mb-4">
                        {props.description}
                    </p>
                    <div className='relative'>
                        <DiscountedItem originalPrice={props.price} discountedPrice={props.newprice} />
                        <Button onClick={()=>onClick()} color="indigo" ripple={true} placeholder={undefined}>Add to Cart</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;