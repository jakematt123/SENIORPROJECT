import React from 'react';
import Navbar from '../_components/navbar/Navbar';
import Footer from '../_components/footer/Footer';
import Profiles from '../_components/profile/profiles';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/server/auth';


const userpages: React.FC = async () => {
    const session = await getServerSession(authOptions);
    return(
        <div>
            <Navbar/>
            <div className="w-screen h-full">
                {session ? <Profiles /> : <h1 className='h-screen flex flex-col justify-center items-center text-2xl font-bold'>You are not logged in</h1> }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        
    );
}

export default userpages;