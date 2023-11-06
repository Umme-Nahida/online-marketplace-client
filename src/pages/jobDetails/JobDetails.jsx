import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuthUserInfo from '../Hooks/useAuthUserInfo';

const JobDetails = () => {
    const { user } = useAuthUserInfo()

    const jobDetailsData = useLoaderData()
    const { category, deadline, description, jobTitle, email, maxPrice, minPrice } = jobDetailsData;
    return (
        <div>
            <div className="hero min-h-screen bg-cover bg-[url('https://i.ibb.co/1RtN0Sk/1696575386372.jpg')]" >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-4xl font-bold">{jobTitle}</h1>
                        <p className="mb-5">{description} </p>
                        <div className='flex justify-center gap-10'>
                            <div className="card-actions justify-center items-center">
                                <span className='font-bold text-xl'>Price rang:</span>
                                <div className='font-bold text-xl'>${minPrice} -</div>
                                <div className='font-bold text-xl'>${maxPrice} </div>
                            </div>
                            <p className='text-[#F28D17] font-bold text-xl'>Deadline: {deadline}</p>
                        </div>
                        <button className="btn btn-wide mt-5">Get more details</button>
                    </div>
                </div>
            </div>

            {/* bid form */}
            <div className='hero min-h-screen'>
                <div className="card flex-shrink-0 w-full max-w-sm md:max-w-xl m-10 md:m-5 shadow-xl border bg-slate-200 bg-opacity-80">
                    <div className="card-body">
                        <form className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Employer bid email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="myemail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="buyerEmail" defaultValue={email} className="input input-bordered" required />
                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Minimum price</span>
                                </label>
                                <input type="number" placeholder="minimum price" name="minPrice" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Miximum price</span>
                                </label>
                                <input type="number" placeholder="miximum price" name="maxPrice" className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='lavel-text'>Deadline</span>
                                </label>
                                <input type="date" name="deadline" required />
                            </div>
                            <input type="submit" value="Bid on the project" className="btn btn-block border-l-2 mt-8 bg-slate-300" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;