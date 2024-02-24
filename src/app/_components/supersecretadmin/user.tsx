"use client"
import { useSession } from "next-auth/react";

const UserDataSession: React.FC = () => {
    const { data: session } = useSession();
    return (<pre>{JSON.stringify(session)}</pre>)
}

export default UserDataSession;