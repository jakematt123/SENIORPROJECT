"use client"

import { useCallback, useEffect, useState } from "react";
import { Client } from "~/app/api/Client";
import ItemCard from "./itemcard";
import { GetImage } from "~/app/store/createitem/page";


interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    images: { id: string; itemId: string; type: string; filename: string; }[];
    imageUrl?: string;
}

export function CreateGrid() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedItems: Item[] = await Client.dbRouter.getItems.query();
            
            const itemsWithImageUrls = await Promise.all(fetchedItems.map(async (item) => {
                const imageUrl = await GetImage(item.images[0]?.filename ?? '');
                return { ...item, imageUrl }; 
            }));

            setItems(itemsWithImageUrls);
            console.log("fetched data");
        }

        fetchData();
    }, []);
  
    return (
        <div>
            {items.map(async (item) => {
                return (
                    <div key={item.id}>
                        <ItemCard
                            image={item.imageUrl ?? ''}
                            title={item.name}
                            description={item.description}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    </div>
                );
            })}
        </div>
    );
}

