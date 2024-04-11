import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Footer from '../_components/footer/Footer';
import deal1 from "../../../assets/deal1.jpg"
import deal2 from "../../../assets/deal2.jpg"
import deal3 from "../../../assets/deal3.jpg"
import { CreateGrid } from '../_components/store/storeGrid';
import 'react-medium-image-zoom/dist/styles.css'
import { DiscountedCard } from '../_components/store/itemcard';
import { Client } from '../api/Client';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/server/auth';


export const DiscountedItem = ({ originalPrice, discountedPrice }) => {
  return (
    <div className="flex items-center space-x-2  text-black font-bold text-lg">
      <span className="line-through text-orange-500">${originalPrice}</span>
      <span className="font-bold">${discountedPrice}</span>
    </div>
  );
};

export async function handleCLick(id: string) {
  const session = await getServerSession(authOptions);
  const itemResponse = await Client.dbRouter.getItemID.query({
    itemName: id
  })

  if (!itemResponse) return;

  const userResponse = await Client.userRouter.getUserbyName.query({
    name: session?.user?.name ?? ''
  })

  if (!userResponse) return;

}


const ReviewStars = ({rating, reviewCount}) => {
  return ( 
    <div className="flex items-center mb-2">
        <svg className="w-4 h-4 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{reviewCount} reviews</a>
    </div>
  );
}


const Home: React.FC = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>

      {/* Main Content */}
      <main className="p-4 space-y-5">
        <h2 className="text-2xl font-bold mb-4">Todays Deals</h2>

        {/* Product Cards */}
        <div className="">
          <DiscountedCard image={deal1} title="Home Weight Set" description="Comes in 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 lb sets." price={40.99} newprice={20.99} quantity={100} />
          <DiscountedCard image={deal2} title="iPhone Charging Cable Valuepack" description = "iPhone Charging Cable Valuepack - 3 cables included." price={29.99} newprice={15.99} quantity={100} />
          <DiscountedCard image={deal3} title="No Show Mens Socks" description="No Show Men Socks, Low Cut Ankle Sock, Men Short Socks Casual Cotton Socks" price={25.95} newprice={15.95} quantity={100} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <CreateGrid />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
