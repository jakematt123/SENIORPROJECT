// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { z } from "zod";

// Define and export the contactRouter
export const userRouter = createTRPCRouter({
    createUserCreds: publicProcedure.input(
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
            
    }),
    purgeAccounts: publicProcedure.mutation(async () => {
        await db.user.deleteMany({})
    }),
});
