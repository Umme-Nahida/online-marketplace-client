import React from 'react';

const AllBidsRow = ({ send, handleDelet,handleProgress, handleCompleted,handleCancelled }) => {
    console.log(send)

    // const { _id, jobTitle, deadline, buyerEmail} = send;

    return (
        <tr>
            <td>
                <button onClick={() => handleDelet(send._id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{send?.jobTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {send?.buyerEmail}
            </td>
            <td>{send?.deadline}</td>
            <th>
                <p>{send?.status} </p>
            </th>
            <th className='flex flex-col gap-2'>
                {
                    send?.status == 'pending' ?
                    <button onClick={() => handleProgress(send._id)} className='btn btn-sm'>Accept</button> : ""

                }
                {
                    send?.status == 'progress' ?
                    <button onClick={() => handleCompleted(send._id)} className='btn btn-sm'>Completed</button> :
                    ""

                }
                 
                    {
                        send?.status == 'cancelled' ? "" :
                        <button onClick={() => handleCancelled(send._id)} className='btn btn-sm'>Cancelled</button>
                    }

            </th>
        </tr>
    )
};
export default AllBidsRow;