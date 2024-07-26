import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuthUserInfo from '../Hooks/useAuthUserInfo';
import Swal from 'sweetalert2';

const UpdatePostJob = () => {
 const updateData = useLoaderData()
 console.log(updateData)
 const {jobTitle,description,deadline,category,maxPrice,minPrice,email,_id } = updateData;
 const {user} = useAuthUserInfo()
 const navigate = useNavigate()

    const handleUpdatePost = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const updateJobInfo = { email, jobTitle, deadline, description, category, minPrice, maxPrice }
        console.log(updateJobInfo)
        fetch(`http://localhost:5000/updatePostJob/${_id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateJobInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.matchedCount){
                    Swal.fire(
                        'Good job',
                        'You have update the post job successfully',
                        'success'
                      )
                      navigate('/myPostJobs')
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/ctgtQ3J/digital-design-businessman-show-growth-graph-earning-with-digital-marketing-strategy-35761-549.jpg')] bg-cover py-10">
        <div className="card flex-shrink-0 w-full max-w-4xl shadow-xl border bg-slate-200 bg-opacity-80">
            <div className="card-body">
                <form onSubmit={ handleUpdatePost} className='space-y-3'>
                    {/* row num 1 */}
                    <h1 className="text-2xl md:text-5xl font-bold text-center pb-5">Update your posted job</h1>
                    <div className='md:flex justify-center items-center gap-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" readOnly defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your job title" name="jobTitle" defaultValue={jobTitle} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* row 2 num  */}
                    <div className='md:flex justify-center items-center gap-5'>
                        <div className='form-control md:w-1/2 '>
                            <label className='label'>
                                <span className='lavel-text'>Deadline</span>
                            </label>
                            <input type="date" name="deadline" defaultValue={deadline} required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Select a category</span>
                            </label>
                            <select name="category" defaultValue={category}>
                                <option value="web-development">Web Development</option>
                                <option value="digital-marketing">digital Marketing</option>
                                <option value="graphics-design">Graphics Design</option>
                            </select>
                        </div>
                    </div>
                    {/* row 3 num  */}
                    <div className='md:flex justify-center items-center gap-5'>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Minimum price</span>
                            </label>
                            <input type="number" placeholder="minimum price" name="minPrice" defaultValue={minPrice} className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Miximum price</span>
                            </label>
                            <input type="number" placeholder="miximum price" name="maxPrice" defaultValue={maxPrice} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='form-control  '>
                        <label>
                            <span className='label-text'>Descriptions</span>
                        </label>
                        <textarea name="description" placeholder='write description' defaultValue={description} cols="10" rows="5"></textarea>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block border-l-2 mt-8 bg-slate-300" />
                </form>
            </div>
        </div>

    </div>
    );
};

export default UpdatePostJob;