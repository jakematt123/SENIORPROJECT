// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { s3Client } from "~/server/aws";
import { db } from "~/server/db";
import { z } from "zod";
import { GetObjectCommand, type ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";
import { create } from "domain";


// Make this a protectedProcedure after adding authentication
export const dbRouter = createTRPCRouter({
    createItem: publicProcedure.input(z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        image: z.object({
            filename: z.string(),
            type: z.string()
        }),
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
        const bytes = await response.Body.transformToByteArray();
        return bytes;
       
    }),
    getCart: publicProcedure.input(z.object({
        userId: z.string()
    })).query(async ({ input }) => {
        return await db.shoppingCart.findUnique({
            where: {
                id: input.userId, // Fix: Change 'userId' to 'id'
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
    getItemByName: publicProcedure.input(z.object({
        name: z.string()
    })).query(async ({ input }) => {
        return await db.item.findFirst({
            where: {
                name: input.name
            }
        });
    }),
    createCart: publicProcedure.input(z.object({
        product: z.string(),
        quantity: z.number(),
    })).mutation(async ({ input }) => {
        await db.shoppingCart.create({
            data: {
                product: input.product,
                quantity: input.quantity,
            }
        });
    }),



    //https://usfseniorproject2024.nyc3.digitaloceanspaces.com/diagnoldog.png
    
});

