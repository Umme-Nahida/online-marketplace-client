import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const link = <>
        <li className="mb-5" ><Link to="/">Home</Link></li>
        <li className="mb-5" ><Link to="/login">Login</Link></li>
        <li className="mb-5" ><Link to="/register">Register</Link></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(r => console.log(r.user))
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar py-0 bg-based-100 shadow-xl">
            {/* dropdown */}
            <div className="dropdown navbar-start lg:hidden ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {link}
                </ul>
            </div>

            <div className=" hidden lg:block navbar-start">
                <div className="flex justify-start items-center">
                    <img className="w-32 hidden lg:block" src="https://i.ibb.co/s2b9vkr/79290-1542796709-removebg-preview-1.png" alt="" />
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-col md:flex-row lg:flex-row items-center text-lg text-[#0d0d0f] font-bold lg:gap-8 md:gap-5 gap-3 ml-40 md:ml-64 lg:ml-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending border" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/addJob' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                        } >
                            Add job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/myPost' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                        } >
                            My posted job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/bidRequests' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                        } >
                            Bid Requests
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myBids"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                            }
                        >
                            My bids
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#5593DD] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end space-x-1">
                {
                    user ?
                        <>
                           <p>{user.displayName}</p>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleSignOut} className="btn ">Log out</button>
                        </>
                        :
                        <button className="btn btn-warning bg-[#F29618] text-white">login</button>
                }
            </div>
        </div>
    );
};

export default Navber;