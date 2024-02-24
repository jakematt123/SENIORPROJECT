"use client"

import React from "react"
import { Button } from "../ClientExports"
import { Client } from "../../api/Client";
import { signOut } from "next-auth/react";

async function purgeContactForms() {
    await Client.contactRouter.purgeContactForms.mutate();
}

async function purgeAccounts() {
    await Client.userRouter.purgeAccounts.mutate();
}

const PurgeContactButton = () => {
    return (
        <div className="space-x-4">
            <Button onDoubleClick={()=>purgeContactForms()} className="bg-red-500" placeholder={"Purge Contact Forms"}>Purge Contact Forms</Button>
            <Button onDoubleClick={() => purgeAccounts()} className="bg-red-500" placeholder={"Purge Accounts"}>Purge Accounts</Button>
            <Button onClick={() => signOut()} className="bg-red-500" placeholder={"Sign Out"}>Sign Out</Button>
        </div>
    )
}

export default PurgeContactButton;