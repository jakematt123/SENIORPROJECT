"use client"
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";

const Footer = () => {
    return (
        <div className="font-titleFont">
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </div>
    )
};


export default Footer;