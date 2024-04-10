import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Footer from '../_components/footer/Footer';
import ShoppingCart from '../_components/shoppingcart/shoppingcart';
import PreviousPurchase from '../_components/shoppingcart/previouspurchase';


const cart: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full">
                <ShoppingCart/>
            </div>
            <div>
                <PreviousPurchase/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default cart;