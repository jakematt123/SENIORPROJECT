import { IoMdArrowDropdown } from "react-icons/io";
import React from "react"
import Navbar from "../_components/navbar/Navbar"
import Footer from "../_components/footer/Footer"
import Image from "next/image";
import shoppy from "/assets/shoppy.png"


const FAQ: React.FC = () => {
  return(
      
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="flex-grow"></div>
      <div className="w-full bg-indigo-100 border border-gray-300 rounded-lg p-4 flex items-center">
        {/* FAQ Content */}
        <div className="flex flex-col w-3/4">
          <h1 className="text-left text-3xl mb-4">Frequently Asked Questions</h1>
          
          <div className="mb-10">
            <h2 className="text-left">
              Discover a revolution in online shopping with Amazooma. Explore a curated collection of products spanning electronics, fashion, home essentials, and more—all at your fingertips. With intuitive navigation, top-notch security, and unparalleled customer service, we're here to redefine your shopping experience. Join us and experience the difference with Amazooma today. Welcome to a new era of shopping. Welcome to Amazooma.
            </h2>
          </div>
          
          
          
        </div>
        
        {/* Image */}
        <div className="flex justify-end w-1/4 pr-4">
          <Image src={shoppy} alt="Online Shopping" className="w-32 h-32 object-cover" />
        </div>
      </div>
      <div >
      <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl h-8">What is Amazooma?</h1>
      {/* Put the arrow here */}
      <h2>Amazooma is an online marketplace offering a diverse range of products across various categories such as electronics, fashion, home essentials, beauty, and more. We strive to provide customers with a seamless shopping experience and access to quality products from trusted sellers.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">How do I place an order on Amazooma?</h1>
      {/* Put the arrow here */}
      <h2>Placing an order on Amazooma is simple and straightforward. Just browse through our collection of products, select the items you wish to purchase, add them to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and your order will be on its way to you!</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">What payment methods are accepted on Amazooma?</h1>
      {/* Put the arrow here */}
      <h2>We accept a variety of payment methods to accommodate our customers' preferences. These include major credit and debit cards, as well as secure online payment platforms such as PayPal. Rest assured that your payment information is encrypted and protected for a secure transaction.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">How long does shipping take?</h1>
      {/* Put the arrow here */}
      <h2>Shipping times may vary depending on your location and the shipping method selected. Typically, orders are processed and dispatched within 1-2 business days. Once shipped, you will receive a tracking number to monitor the progress of your delivery. For more information on shipping times, please refer to our Shipping Policy.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">What is Amazooma's return policy?</h1>
      {/* Put the arrow here */}
      <h2>We want you to be completely satisfied with your purchase from Amazooma. If for any reason you are not happy with your order, you may return it within 30 days of receipt for a refund or exchange. Please note that certain restrictions may apply, so we recommend reviewing our Return Policy for more details.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">How can I contact customer support?</h1>
      {/* Put the arrow here */}
      <h2>If you have any questions, concerns, or feedback, our dedicated customer support team is here to assist you. You can reach us via email at support@amazooma.com or through our Contact Us page. We strive to respond to all inquiries promptly and provide you with the assistance you need.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">Is my personal information secure on Amazooma?</h1>
      {/* Put the arrow here */}
      <h2>Yes, protecting your personal information is a top priority at Amazooma. We utilize advanced security measures to safeguard your data and ensure that your privacy is respected. Your information will only be used for order processing, account management, and communication purposes, as outlined in our Privacy Policy.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">Does Amazooma offer gift cards?</h1>
      {/* Put the arrow here */}
      <h2>Yes, we offer gift cards that make the perfect present for any occasion. You can purchase gift cards in various denominations and send them directly to your loved ones via email. Gift cards can be redeemed for any product available on Amazooma, giving recipients the freedom to choose their favorite items.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">Does Amazooma offer international shipping?</h1>
      {/* Put the arrow here */}
      <h2>Yes, we offer international shipping to select countries around the world. Simply enter your shipping address during checkout to see if we deliver to your location. Please note that international shipping fees and delivery times may vary depending on the destination and shipping method chosen.</h2>
    </div>
    
    <div className="text-center mb-4 px-40">
      <h1 className="text-left text-2xl">How can I stay updated on promotions and deals on Amazooma?</h1>
      {/* Put the arrow here */}
      <h2>To stay informed about the latest promotions, deals, and exclusive offers on Amazooma, be sure to subscribe to our newsletter. You can also follow us on social media platforms such as Facebook, Instagram, and Twitter for real-time updates and special announcements.</h2>
      
    </div>
    </div>
    
    
    <Footer />
    </div>
  );
};

export default FAQ;