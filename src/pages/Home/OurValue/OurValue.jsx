import React from 'react';

const OurValue = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/vYZFJ6k/data-analyst-working-on-business-260nw-2276307805.webp')] bg-no-repeat bg-cover ">
            <div className='bg-black bg-opacity-60 lg:px-24 lg:py-24 md:py-10 md:px-5 py-10 px-5'>
                <div className="text-center mb-16">
                    <h1 className="text-4xl mb-5  font-semibold text-[#FFFFFF]">Our core values</h1>
                    <p className='text-lg text-white md:text-lg max-w-sm md:max-w-2xl mx-auto'>Our core values are the fundamental beliefs of a person or organization geeks academy. We help people understand the difference between right and wrong.</p>
                </div>

                <div className=" shadow-xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className=" border p-8 bg-white rounded-lg">
                        <h2 className="card-title text-xl my-4 ">Make Education Accessible</h2>
                        <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
                    </div>
                    <div className="border p-8 bg-white rounded-lg">
                        <h2 className="card-title text-xl my-4">Learn and Grow</h2>
                        <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
                    </div>
                    <div className="border p-8 bg-white rounded-lg">
                        <h2 className="card-title text-xl my-4">Make Education Accessible</h2>
                        <p>Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValue;