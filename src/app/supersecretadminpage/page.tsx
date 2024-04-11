"use server"

import React, { Suspense } from "react";
import PurgeButtons from "../_components/supersecretadmin/AdminButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import UserDataSession from "../_components/supersecretadmin/user";

const AdminPageDetails = async () => {
    
    const session = await getServerSession(authOptions);
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <PurgeButtons/>
            <div className="flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold">Server Session</h1>
                <pre className="">{JSON.stringify(session)}</pre>

        
                <h1 className="text-3xl font-bold">Client Call</h1>
                <Suspense>
                    <UserDataSession />
                </Suspense>
            </div>
            
        </div>
    );
};

const AdminPage = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            {session?.user.name === "thatswhatido" ? <AdminPageDetails /> : <h1 className='h-screen flex flex-col justify-center items-center text-2xl font-bold'>You are not an admin</h1>}
            <AdminPageDetails />
        </div>
    );
}


export default AdminPage;