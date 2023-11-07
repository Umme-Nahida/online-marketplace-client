import React from 'react';

const BidsRow = ({bid}) => {
    console.log(bid)
    const {jobTitle,deadline,buyerEmail} = bid;
    return (
        <tr>
            <td>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{jobTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {buyerEmail}
            </td>
            <td>{deadline}</td>
            <th>
                <button className="btn btn-ghost btn-xs">pending</button>
            </th>
        </tr>
    );
};

export default BidsRow;