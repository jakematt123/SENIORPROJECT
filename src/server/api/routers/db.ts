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
    getImageForCards: publicProcedure.input(z.object({
        itemId: z.string()
    })).query(async ({ input }) => {
        
    })
        


    //https://usfseniorproject2024.nyc3.digitaloceanspaces.com/diagnoldog.png
    
});

