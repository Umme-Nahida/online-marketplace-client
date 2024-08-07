import { useEffect, useState } from "react";
import AllBids from "./AllBidsRow";
import useAuthUserInfo from "../Hooks/useAuthUserInfo";
import AllBidsRow from "./AllBidsRow";
import { linkWithCredential } from "firebase/auth";

const MyRequests = () => {
    const { user } = useAuthUserInfo();
    const [bidRequest, setBidRequest] = useState()
    const [status,setStatus] = useState('pending')
    useEffect(() => {
        document.title = "Entree | My request";
    }, [])

    const url = (`http://localhost:5000/getMyAllBidRequest/${user?.email}`)
    useEffect(() => {
        fetch(url, {credentials:'include'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBidRequest(data)

            })
    }, [url,status])

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
                fetch(`http://localhost:5000/bidJobs/${id}`, {
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
        fetch(`http://localhost:5000/updateBidRejectStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'cancelled' })
        })
            .then(res => res.json())
            .then(data => {
                setStatus('cancelled')
            })
    }

    const handleCompleted = id => {
        console.log(id)
        fetch(`http://localhost:5000/updateBidCompletStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStatus('completed')
            })
    }


    const handleProgress = id => {
        console.log(id)
        fetch(`http://localhost:5000/updateBidProgressStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'progress' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStatus('progress')
            })
    }


    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center pt-10">All bid requests</h1>
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
                            <th>Employer Email</th>
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