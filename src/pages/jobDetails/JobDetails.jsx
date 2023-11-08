import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useAuthUserInfo from '../Hooks/useAuthUserInfo';
import Swal from 'sweetalert2';

const JobDetails = () => {
    const { user } = useAuthUserInfo()
    const navigate = useNavigate()
    const jobDetailsData = useLoaderData()
    const { category, deadline, description, jobTitle, email, maxPrice, minPrice } = jobDetailsData;

    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const myEmail = form.myEmail.value;
        const buyerEmail = form.buyerEmail.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const deadline = form.deadline.value;
        const status = "pending";
        console.log(buyerEmail)
        const bidInfo = { myEmail, buyerEmail, minPrice, maxPrice, deadline, category,description,jobTitle,status }
        console.log(bidInfo)
        
        fetch('https://assignment-11-server-dun.vercel.app/storeBidJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Great',
                        'You have add the bid project successfully',
                        'success'
                    )
                }
                navigate('/myBids');
            })

    }
 
    
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
                            <p className='text-white font-bold text-xl'>Deadline: {deadline}</p>
                        </div>
                        <button className="btn btn-wide mt-5">Get more details</button>
                    </div>
                </div>
            </div>

            {/* bid form */}
            <div className='hero min-h-screen'>
                <div className="card flex-shrink-0 w-full max-w-sm md:max-w-xl m-10 md:m-20 shadow-xl border bg-slate-200 bg-opacity-80">
                    <div className="card-body">
                        <form onSubmit={handleBid} className='space-y-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Employer bid email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="myEmail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            {/* read only */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input type="email" name="buyerEmail" readOnly defaultValue={email} className="input input-bordered" required />

                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Minimum price</span>
                                </label>
                                <input type="number" placeholder="minimum price" name="minPrice" defaultValue={minPrice} className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Miximum price</span>
                                </label>
                                <input type="number" placeholder="miximum price" name="maxPrice"  defaultValue={maxPrice} className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='lavel-text'>Deadline</span>
                                </label>
                                <input type="date" name="deadline" required />
                            </div>
                                <input type="submit" value="Bid on the project" className="btn btn-block border-l-2 mt-8 text-white bg-[#2071AB] hover:bg-[#2071AB]" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;