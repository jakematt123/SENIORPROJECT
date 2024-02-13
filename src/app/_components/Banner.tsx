"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bannerImgOne from "/assets/banner/bannerImgOne.jpg";
import bannerImgTwo from "/assets/banner/bannerImgTwo.jpg";
import bannerImgThree from "/assets/banner/bannerImgThree.jpg";
import bannerImgFour from "/assets/banner/bannerImgFour.jpg";   
import bannerImgFive from "/assets/banner/bannerImgFive.jpg";


const Banner: React.FC = () => {
    const [dotActive, setDotActive] = React.useState(0);

    const handleSlide = (index: number) => {
        setDotActive(index);
    }
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    top: "95%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "210px"
                }}>
                <ul style={{
                    margin: "0",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    listStyle: "none",
                    width: "100%"
                }}>
                {" "}
                {dots}{" "} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
            style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "8px 0",
                cursor: "pointer",
                border: i === dotActive ? "1px solid #f3a847" : "1px solid white",
                background: i === dotActive ? "#131921" : "#232F3E",
              }}>
                {i + 1}
            </div>
        ),
        beforeChange: (_current: number, next: number) => handleSlide(next)
    }
    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <Image src={bannerImgOne} alt={"img1"} width={3000} height={1200}/>
                    </div>
                    <div>
                        <Image src={bannerImgTwo} alt={"img2"} width={3000} height={1200}/>
                    </div>
                    <div>
                        <Image src={bannerImgThree} alt={"img3"} width={3000} height={1200}/>
                    </div>
                    <div>
                        <Image src={bannerImgFour} alt={"img4"} width={3000} height={1200}/>
                    </div>
                    <div>
                        <Image src={bannerImgFive} alt={"img5"} width={3000} height={1200}/>
                    </div>
                </Slider>
            </div>
        </div>
        
        
    )
}

export default Banner;