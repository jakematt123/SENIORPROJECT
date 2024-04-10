// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { s3Client } from "~/server/aws";
import { db } from "~/server/db";
import { z } from "zod";
import { ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";

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
            }
        })
    }),
    uploadImage: publicProcedure.input(z.object({
        Bucket: z.string(),
        Key: z.string(),
        Body: z.any(),
        ACL: z.union([z.string().optional(), z.undefined()]), // Fix: Ensure ACL property is of type ObjectCannedACL | undefined
        Metadata: z.record(z.string())
    })).mutation(async ({ input }) => {
        await s3Client.send(new PutObjectCommand({
            ...input,
            ACL: input.ACL as ObjectCannedACL | undefined // Fix: Cast ACL property to ObjectCannedACL | undefined
        }));
    })
    
});

