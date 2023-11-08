import { useEffect, useState } from "react";
import AllBids from "./AllBidsRow";
import useAuthUserInfo from "../Hooks/useAuthUserInfo";
import AllBidsRow from "./AllBidsRow";

const MyRequests = () => {
    const { user } = useAuthUserInfo();
    const [bidRequest, setBidRequest] = useState()

    useEffect(() => {
        document.title = "Entree | My request";
    }, [])

    const url = (`https://assignment-11-server-dun.vercel.app/displayMyBids?email=${user?.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBidRequest(data)

            })
    }, [url])

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
                fetch(`https://assignment-11-server-dun.vercel.app/bidJobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const reamiming = bidRequest.filter(bid => bid._id !== id)
                            setBidRequest(reamiming)
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

    const handleCancelled = id => {
        console.log(id)
        fetch(`https://assignment-11-server-dun.vercel.app/updateBidRejectStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'cancelled' })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleCompleted = id => {
        console.log(id)
        fetch(`https://assignment-11-server-dun.vercel.app/updateBidCompletStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'completed' })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleProgress = id => {
        console.log(id)
        fetch(`https://assignment-11-server-dun.vercel.app/updateBidProgressStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'progress' })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center pt-10">My bids</h1>
            {/* <h1>here to all bids data {bids.length}</h1> */}
            <div className="overflow-x-auto" >
                <table className="table max-w-[150px] md:max-w-6xl mx-auto my-5 md:my-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bidRequest?.map(reqItem => <tbody key={reqItem._id}>
                            <AllBidsRow
                                send = {reqItem}
                                handleDelet = {handleDelet}
                                handleProgress = {handleProgress}
                                handleCompleted = {handleCompleted}
                                handleCancelled = {handleCancelled}>
                               
                            </AllBidsRow>

                        </tbody>)
                    }

                </table >
            </div>
        </div>
    );
};

export default MyRequests;