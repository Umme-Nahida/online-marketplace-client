import { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    useEffect(()=>{
        document.title = "Entree | Login";
    },[])

    const [showPassword, setShowPassword] = useState(false)
    const {signInUser} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            Swal.fire(
                'Good job',
                'You have login successfully',
                'success'
              )
              e.target.reset()
              navigate(location?.state ? location.state : "/") 
        })
        .catch(error=>{
            console.log(error)
            toast('Invalid email and password', error.massage || error.status)
        })

    }

    return (

        <div className="hero min-h-screen bg-[url('https://i.ibb.co/pffTTkR/1706e25eac3c20ab4bf5d2062264a288af29f496-1324x742.webp')] py-10">
            <div className="card flex-shrink-0 w-full max-w-xs md:max-w-md shadow-2xl border bg-slate-200 bg-opacity-80">
                <form onSubmit={handleSignIn} className="card-body">
                   <h1 className="text-3xl md:text-5xl font-bold text-center pb-5">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative md:flex justify-center">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            className="input input-bordered"
                            required />
                        <span className="absolute top-14 right-4" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}</span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F39318] hover:text-[#208BB6]">Login</button>
                    </div>
                    <div className="text-center my-6 flex flex-col">

                        <button href="#" className="text-sm font-bold text-black m-1">
                            If you have no account? <br />
                            <Link to='/register' className="text-[#F39318]">Please SignUp</Link> </button>
        
                    </div>
                    <ToastContainer></ToastContainer>
                </form>
            </div>

        </div>

    );
};

export default Login;