"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const footers = [
    {
        title: 'Get to Know Us',
        href: '/FAQ',
    },
    {
        title: 'Store',
        href: '/store',
    },
    {
        title: 'Contact Us',
        href: '/contact',
    },
    {
        title: 'Home',
        href: '/',
    }
]

const FooterMiddle: React.FC = () => {
    const router = useRouter();
    return (
        <div className='w-full bg-amazon_light text-white'>
            <div className='w-full border-b-[1px] border-gray-500 py-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full grid grid-cols-4 place-items-center items-start'>
                        {footers.map((footer, index) => (
                            <div key={index}>
                                <h1 onClick={()=>{router.push(`${footer.href}`)}} className='font-titleFont text-white headerHover text-md'>{footer.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-6 items-center justify-center py-6'>
                <div>
                    <Image className="w-20 pt-3" src={"/RaysLogoTransparent.png"} width={595} height={439} alt="Logo"/>
                </div>
                <div className='flex gap-2'>
                    <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
                </div>
                <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                    <Image className='w-6 object-scale-down' src={"/USA.png"} alt='USA Flag' width={1469} height={902}/>
                    <p>USA</p>
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;