import React from 'react';

const Aboutus = () => {
    return (
        <div className="">
            <div className=' lg:flex md:flex-cols-reverse flex-cols-reverse  items-center justify-between py-5 mx-10 md:py-16  lg:py-28 '>
                <div className='lg:w-1/2'>
                    <h1 className="text-4xl lg:text-6xl text-black mb-8 md:text-center lg:text-left text-center">About Us</h1>
                    {/* <h1 className="text-2xl mb-6  font-semibold text-[#49CF9E] md:text-left text-center">High Quality & Professional Yoga Club</h1> */}
                    <p className="text-base  w-full md:w-full lg:w-[460px] lg:mr-5 md:text-center lg:text-left text-center mb-5">We’re building the best next-generation interactive bootstrap based UI Kit design tool for developers, engineers, Full-Stack developer, and digital agency.Geeks provide clean and consistent page designs to help you to create beautiful looking contents. Geek is feature-rich components and beautifully designed pages that help you create the best possible website and web application projects.</p>

                </div>
                <div className='lg:w-1/2'>
                    <img className="lg:w-full pl-0 " src="https://i.ibb.co/JKByJGm/what-does-a-web-designer-do-1024x576.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Aboutus;