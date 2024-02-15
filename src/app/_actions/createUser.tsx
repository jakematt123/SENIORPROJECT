"use server"

import { db } from "../../server/db";

export async function CreateUser(username: string, email: string, password: string) {
    await db.user.create({
        data: {
            name: "hi",
            username: username,
            email: email,
            password: password
        }
    })
}