"use server"
import { db } from "../../server/db";


export async function CreateDatabaseData(fullname: string, email: string, message: string) {
    await db.contactUS.create({
        data: {
            fullName: fullname,
            email: email,
            message: message
        }
    })

}