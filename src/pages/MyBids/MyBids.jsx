import { useEffect, useState } from "react";
import useAuthUserInfo from "../Hooks/useAuthUserInfo";
import BidsRow from "./BidsRow";
import Swal from "sweetalert2";

const MyBids = () => {
  const { user } = useAuthUserInfo();
  const [bids, setBids] = useState([]);
  const [sort, setSort] = useState([]);
//   console.log(bids);

  useEffect(() => {
    document.title = "Entree | My bids";
  }, []);
  const url = `http://localhost:5000/getMyBids?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBids(data);
      });
  }, [url]);

  const handleDelet = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bidJobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const reamiming = bids.filter((bid) => bid._id !== id);
              setBids(reamiming);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleCompleted = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/updateBidCompletStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

 

  const handleSorting = async() => {
   
       const res = await fetch('http://localhost:5000/sortingBid')
       const data = await res.json();
       console.log(data)
       setSort(data);
       setBids(sort);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center pt-10">
        My bids
      </h1>
      <select onClick={handleSorting()} className="select select-primary w-full max-w-xs mt-5">
        <option disabled selected>
          Sorting
        </option>
        <option>Pending</option>
        <option>Confirm</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
      {/* <h1>here to all bids data {bids.length}</h1> */}
      <div className="overflow-x-auto">
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
          {bids?.map((bid) => (
            <tbody key={bid._id}>
              <BidsRow
                send={bid}
                handleDelet={handleDelet}
                handleCompleted={handleCompleted}
              ></BidsRow>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyBids;
