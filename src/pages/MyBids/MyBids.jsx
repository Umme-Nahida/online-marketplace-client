import { useEffect, useState } from "react";
import useAuthUserInfo from "../Hooks/useAuthUserInfo";
import BidsRow from "./BidsRow";


const MyBids = () => {
    const { user } = useAuthUserInfo()
    const [bids, setBids] = useState()
    useEffect(()=>{
        document.title = "Entree | My bids";
    },[])

    const url = (`http://localhost:5000/displayMyBids?email=${user?.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])

    return (
        <div>
            {/* <h1>here to all bids data {bids.length}</h1> */}
            <div className="overflow-x-auto" >
                <table className="table">
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
                        bids?.map(bid => <tbody key={bid._id}>
                            {/* row 1 */}
                            <BidsRow bid={bid} ></BidsRow>

                        </tbody>)
                    }

                </table >
            </div>
        </div>
    );
};

export default MyBids;