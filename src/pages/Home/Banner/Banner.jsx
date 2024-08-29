import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from '../../../../public/'
import img1 from "../../../assets/image/web-dev1.jpg";
import img2 from "../../../assets/image/marketing.jpg";
import img3 from "../../../assets/image/graphic-main.jpg";
import img4 from "../../../assets/image/development-2.jpg";
import img5 from "../../../assets/image/development-3.jpg";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  

  return (
    <div style={{backgroundImage:`url(${img4})`}} className="h-[500px] bg-cover ">
      <div className="text-white text-center bg-black bg-opacity-60 h-full w-full flex items-center justify-center ">
        <div className="space-y-5 w-[700px]">
        <h1 className="text-xl md:text-5xl font-bold leading-4">Find & Hire Experts <br />
      for any Job</h1>
      <p>Find Jobs, Employment & Career Opportunities. Some of the companies we&apos;ve helped recruit excellent applicants over the years.</p>
      <p className="text-slate-400">Popular Searches : Digital Marketing, Graphics, Web, SEO Optimizations</p>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
