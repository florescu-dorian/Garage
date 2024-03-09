"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if(nextSection){
      nextSection.scrollIntoView({behavior: "smooth"});
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Automotive Enclave</h1>
        <p className="hero__subtitle">
          Discover Automotive Excellence - Explore a Diverse Collection of
          Remarkable Cars
        </p>

        <CustomButton
          title="Enter the Garage"
          containerStyles="bg-indigo-500 
          text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/Car.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
