import React from "react";
import FooterBottom from "./BottomFooter";
import FooterTop from "./TopFooter";
import FooterMiddle from "./MiddleFooter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";

const Footer: React.FC = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div className="relative bottom-0 w-screen">
            <FooterTop session={session} />
            <FooterMiddle />
            <FooterBottom />
        </div>
       
    )
};


export default Footer;