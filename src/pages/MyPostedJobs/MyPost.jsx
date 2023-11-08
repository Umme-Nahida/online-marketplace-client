import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyPost = () => {
    useEffect(() => {
        document.title = "Entree | My posted job";
    }, [])

    const allJobs = useLoaderData()
    const [allJob, setAllJob] = useState(allJobs)

    const handleDelet = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myPostedJobDelet/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const reamiming = allJob.filter(bid => bid._id !== id)
                            setAllJob(reamiming)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h1 className="text-2xl md:text-6xl text-center mt-20">My all posted jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 m-10 md:m-20 justify-items-center'>
                {
                    allJob.map(job => <div key={job._id} className="card bg-base-100 shadow-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{job?.jobTitle} </h2>
                            {
                                job?.description.length > 200 ? <p>{job?.description.slice(0, 150)}.... </p> : <p>{job.description} </p>
                            }
                            <div>Email: {job?.email}</div>
                            <div className="card-actions">
                                <span className='font-bold text-xl'>Price rang:</span>
                                <div className='font-bold text-xl'>${job?.minPrice} -</div>
                                <div className='font-bold text-xl'>${job?.maxPrice} </div>
                            </div>
                            <div className="badge badge-outline text-white bg-[#F39519]"> {job.category}</div>
                            <div className="card-actions  w-full ">
                                <button onClick={() => handleDelet(job?._id)} className="btn bg-[#2071AB] text-white hover:text-black w-full btn-sm">Delete</button>
                                <Link className="w-full" to={`/updatePostJob/${job._id}`} >
                                    <button className="btn bg-[#2071AB] btn-block text-white hover:text-black btn-sm">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyPost;