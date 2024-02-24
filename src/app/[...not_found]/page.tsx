"use client"
import { type NextPage } from "next";
import { Button } from "../_components/ClientExports"
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage: NextPage = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    function handleClick(): void {
        setLoading(true);
        router.back();
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg">The page you are looking for does not exist.</p>
            {/*All of this just for a fucking button*/}
            <div className='mt-9'>
                <Button
                    onClick={() => handleClick()}
                    className=' bg-amazon_blue rounded-md border-[1px green-50] text-white py-2 px-4 text-sm font-bodyFont focus:shadow-md hover:shadow-md'
                    loading={loading}
                    placeholder="Returning home">
                    {loading ? 'Returning Home' : 'Return home'}
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;