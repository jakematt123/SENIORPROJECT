"use client"

import { useEffect, useState } from "react";
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
}

async function fetchItems() {
    const items: Item[] = await Client.dbRouter.getItems.query();
    return items;
}

  
export function CreateGrid() {
    const [items, setItems] = useState<{ id: string; name: string; description: string; price: number; quantity: number; images: { id: string; itemId: string; type: string; filename: string; }[] }[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchItems();
            setItems(data);
        }
        fetchData();

    console.log("fetched data")
    }, []);
  
    return (
        <div>
            {items.map(async (item) => {
                return (
                    <div key={item.id}>
                        <ItemCard
                            image={await GetImage(item.images[0]?.filename ?? '')}
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