// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

// Define and export the contactRouter
export const userRouter = createTRPCRouter({
    createUser: publicProcedure.input(
        z.object({
            name: z.string(),
            username: z.string(),
            password: z.string(),
            email: z.string().email()
        })
    ).mutation(async ({ input }) => {
        await db.user.create({
            data: {
                name: input.name,
                username: input.username,
                email: input.email,
                password: input.password
            }
        })
            
    })
});
