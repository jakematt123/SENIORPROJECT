// Import necessary modules (replace these imports with actual imports)
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { z } from "zod";



// Define and export the contactRouter
export const contactRouter = createTRPCRouter({
    createContactForm: publicProcedure.input(z.object({ 
        name: z.string(),
        email: z.string().email(),
        message: z.string()
    })).mutation(async ({ input }) => {
        await db.contactUS.create({
            data: {
                fullName: input.name,
                email: input.email,
                message: input.message
            }
        })
    }),
    //Change to protectedProcedure after adding authentication
    purgeContactForms: publicProcedure.mutation(async () => {
        await db.contactUS.deleteMany({})
    })
});
