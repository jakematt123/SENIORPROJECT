import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Footer from '../_components/footer/Footer';
import Profiles from '../_components/profile/profiles';

const userpages: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full">
                <Profiles/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default userpages;