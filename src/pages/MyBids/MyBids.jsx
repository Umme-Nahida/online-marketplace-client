import { useEffect, useState } from "react";
import useAuthUserInfo from "../Hooks/useAuthUserInfo";
import BidsRow from "./BidsRow";
import Swal from "sweetalert2";



const MyBids = () => {
    const { user } = useAuthUserInfo()
    const [bids, setBids] = useState([])
    const [sort,setSort] = useState([])
    console.log(bids)
    useEffect(() => {
        document.title = "Entree | My bids";
    }, [])
    const url = (`https://assignment-11-server-dun.vercel.app/getMyBids/${user?.email}`)

    useEffect(() => {
        fetch(url, {credentials:'include'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBids(data)

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
                            const reamiming = bids.filter(bid => bid._id !== id)
                            setBids(reamiming)
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

    useEffect(()=>{
        fetch('https://assignment-11-server-dun.vercel.app/sortingBid')
        .then(res =>res.json())
        .then(data => setSort(data))
    },[])

    const handleSorting = ()=>{
        setBids(sort)
}

        

return (
    <div className="text-center"> 
        <h1 className="text-3xl md:text-5xl font-bold text-center pt-10">My bids</h1>
        <button onClick={ handleSorting} className=" btn text-base md:text-base font-bold mt-5 ">sorting</button>
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
                        <th>Buyer Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    bids?.map(bid => <tbody key={bid._id}>
                        <BidsRow
                            send={bid}
                            handleDelet={handleDelet}
                            handleCompleted={handleCompleted}
                        ></BidsRow>

                    </tbody>)
                }

            </table >
        </div>
    </div>

);
};

export default MyBids;