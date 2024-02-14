import React from 'react';
import Image from 'next/image';
import { FaFlagUsa } from 'react-icons/fa';

const footers = [
    {
        title: 'Get to Know Us',
        items: [
            'Careers',
            'Blog',
            'About Amazon',
            'Investor Relations',
            'Amazon Devices',
            'Amazon Tours'
        ]
    },
    {
        title: 'Make Money with Us',
        items: [
            'Sell products on Amazon',
            'Sell apps on Amazon',
            'Become an Affiliate',
            'Advertise Your Products',
            'Self-Publish with Us',
            'Host an Amazon Hub'
        ]
    },
    {
        title: 'Amazon Payment Products',
        items: [
            'Amazon Business Card',
            'Shop with Points',
            'Reload Your Balance',
            'Amazon Currency Converter'
        ]
    },
    {
        title: 'Let Us Help You',
        items: [
            'Amazon and COVID-19',
            'Your Account',
            'Your Orders',
            'Shipping Rates & Policies',
            'Returns & Replacements',
            'Manage Your Content and Devices',
            'Amazon Assistant',
            'Help'
        ]
    
    }
]


const FooterMiddle: React.FC = () => {
    
    return (
        <div className='w-full bg-amazon_light text-white'>
            <div className='w-full border-b-[1px] border-gray-500 py-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full grid grid-cols-4 place-items-center items-start'>
                            {
                                footers.map((footer, index) => {
                                    return (
                                        <div key={index}>
                                            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{footer.title}</h3>
                                            {
                                                footer.items.map((item, index) => {
                                                    return (
                                                        <ul key={index} className='flex flex-col font-bodyFont'>
                                                            <li className='footerLink'>{item}</li>
                                                        </ul>
                                                        
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
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