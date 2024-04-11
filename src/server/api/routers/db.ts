// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { s3Client } from "~/server/aws";
import { db } from "~/server/db";
import { z } from "zod";
import { GetObjectCommand, ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";
import { get } from "http";


// Make this a protectedProcedure after adding authentication
export const dbRouter = createTRPCRouter({
    createItem: publicProcedure.input(z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        image: z.any(),
        quantity: z.number()
    })).mutation(async ({ input }) => {
        await db.item.create({
            data: {
                name: input.name,
                description: input.description,
                price: input.price,
                quantity: input.quantity,
                images: { // Fix: Change property name from 'image' to 'images'
                    create: {
                        filename: input.image.filename,
                        type: input.image.type
                    }
                }
            }
        })
    }),
    getItems: publicProcedure.query(async () => {
        return await db.item.findMany({
            include: {
                images: true
            }
        });
    }),
    uploadImage: publicProcedure.input(z.object({
        Bucket: z.string(),
        Key: z.string(),
        Body: z.any(),
        ACL: z.union([z.string().optional(), z.undefined()]), // Fix: Ensure ACL property is of type ObjectCannedACL | undefined
        Metadata: z.record(z.string())
    })).mutation(async ({ input }) => {
        const data = await s3Client.send(new PutObjectCommand({
            ...input,
            ACL: input.ACL as ObjectCannedACL | undefined // Fix: Cast ACL property to ObjectCannedACL | undefined
        }));
        return data;
    }),
    getImage: publicProcedure.input(z.object({
        Bucket: z.string(),
        Key: z.string()
    })).query(async ({ input }) => {
        const response = await s3Client.send(new GetObjectCommand({
            Bucket: input.Bucket,
            Key: input.Key,
        }));
        if(!response.Body) return;
        let bytes = await response.Body.transformToByteArray();
        return bytes;
       
    }),
    addToCart: publicProcedure.input(z.object({
        userId: z.string(),
        itemId: z.string(),
        quantity: z.number()
    })).mutation(async ({ input }) => {
        try {
            // Find the user's shopping cart or create a new one if it doesn't exist
            let shoppingCart = await db.shoppingCart.findUnique({
                where: {
                    id: input.userId, // Fix: Change 'userId' to 'id'
                    userId: input.userId,
                },
                include: {
                    items: true,
                },
            });
        
            if (!shoppingCart) {
                shoppingCart = await db.shoppingCart.create({
                    data: {
                        userId: input.userId,
                        items: { create: [] }, // Fix: Specify the type and assign an empty array
                    },
                }) as { items: { id: string; quantity: number; itemId: string; cartId: string; }[]; } & { id: string; userId: string; createdAt: Date; };
            }

            // Check if the item is already in the user's cart
            const existingCartItem = shoppingCart.items.find((item) => item.itemId === input.itemId);
        
            if (existingCartItem) {
                // If the item exists in the cart, update its quantity
                await db.cartItem.update({
                    where: {
                        id: existingCartItem.id,
                    },
                    data: {
                        quantity: existingCartItem.quantity + input.quantity,
                    },
                });
            } else {
                // If the item doesn't exist in the cart, create a new cart item
                await db.cartItem.create({
                    data: {
                        quantity: input.quantity,
                        itemId: input.itemId,
                        cartId: shoppingCart.id,
                    },
                });
            }
        
            console.log('Item added to cart successfully');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error;
        }

    }),
    getCart: publicProcedure.input(z.object({
        userId: z.string()
    })).query(async ({ input }) => {
        return await db.shoppingCart.findUnique({
            where: {
                id: input.userId, // Fix: Change 'userId' to 'id'
            },
            include: {
                items: true,
            },
        });
    }),
    deleteItem: publicProcedure.input(z.object({
        itemId: z.string()
    })).mutation(async ({ input }) => {
        await db.item.delete({
            where: {
                id: input.itemId
            }
        });
    }),
    getItemID: publicProcedure.input(z.object({
        itemName: z.string()
    })).query(async ({ input }) => {
        return await db.item.findFirst({
            where: {
                name: input.itemName
            }
        });
    }),
    createReview: publicProcedure.input(z.object({
        userId: z.string(),
        itemId: z.string(),
        rating: z.number(),
        comment: z.string()
    })).mutation(async ({ input }) => {
        await db.review.create({
            data: {
                rating: input.rating,
                comment: input.comment,
                name: input.userId,
                item: input.itemId
            },
        });
    }),
    getReviews: publicProcedure.query(async () => {
        const data = await db.review.findMany();
        return data;
    }),



    //https://usfseniorproject2024.nyc3.digitaloceanspaces.com/diagnoldog.png
    
});

