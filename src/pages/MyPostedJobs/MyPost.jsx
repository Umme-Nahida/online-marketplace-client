import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const MyPost = () => {
    useEffect(() => {
        document.title = "Entree | My posted job";
    }, [])

    const allJobs = useLoaderData()
    console.log(allJobs)
    return (
        <div>
            <h1 className="text-2xl md:text-6xl text-center mt-20">My all posted jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 m-10 md:m-20 justify-items-center'>
                {
                    allJobs.map(job => <div key={job._id} className="card bg-base-100 shadow-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{job?.jobTitle} </h2>
                            {
                                job?.description.length > 200 ? <p>{job?.description.slice(0,150)}.... </p> : <p>{job.description} </p>
                            }
                           <div>Email: {job?.email}</div>
                            <div className="card-actions">
                                <span className='font-bold text-xl'>Price rang:</span>
                                <div className='font-bold text-xl'>${job?.minPrice} -</div>
                                <div className='font-bold text-xl'>${job?.maxPrice} </div>
                            </div>
                           <div className="badge badge-outline text-white bg-[#F39519]"> {job.category}</div> 
                            <div className="card-actions  w-full ">
                                <button className="btn btn-primary w-full btn-sm">Delete</button>
                                <button className="btn btn-primary w-full btn-sm">Update</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyPost;