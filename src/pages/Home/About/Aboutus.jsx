import React from 'react';

const Aboutus = () => {
    return (
        <div className="lg:flex md:flex flex-cols-reverse  items-center justify-between py-5 px-10 md:py-16 md:px-10 lg:py-28 lg:px-32">
                <div>
                    <h1 className="text-4xl text-black mb-8 md:text-left text-center">About Us</h1>
                    {/* <h1 className="text-2xl mb-6  font-semibold text-[#49CF9E] md:text-left text-center">High Quality & Professional Yoga Club</h1> */}
                    <p className="text-base w-full md:w-44 lg:w-[500px] md:text-left text-center mb-5">We’re building the best next-generation interactive bootstrap based UI Kit design tool for developers, engineers, Full-Stack developer, and digital agency.Geeks provide clean and consistent page designs to help you to create beautiful looking contents. Geek is feature-rich components and beautifully designed pages that help you create the best possible website and web application projects.</p>

                </div>
                <div>
                    <img className="lg:w-full md:pl-20 pl-0 " src="https://i.ibb.co/JKByJGm/what-does-a-web-designer-do-1024x576.webp" alt="" />
                </div>
            </div>
    );
};

export default Aboutus;