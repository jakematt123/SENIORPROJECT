"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "~/server/auth"
export async function serverSession() {
    const session = await getServerSession(authOptions)
    return session
}