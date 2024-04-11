import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Footer from '../_components/footer/Footer';
import ShoppingCart from '../_components/shoppingcart/shoppingcart';
import PreviousPurchase from '../_components/shoppingcart/previouspurchase';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/server/auth';

const cart: React.FC = async () => {
    const session = await getServerSession(authOptions);
    return(
        <div>
            <Navbar/>
            {
                session ? (
                    <div>
                        <div className="w-screen h-full">
                            <ShoppingCart />
                        </div>
                        <div>
                            <PreviousPurchase />
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-full'>
                        <h1 className='flex flex-col justify-center items-center text-2xl font-bold'>You are not logged in</h1>
                    </div>
                )   
            }

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default cart;