import { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
   
    useEffect(()=>{
        document.title = "Entree | Register";
    },[])
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password,name,img)
        creatUser(email, password)
            .then(result => {
                console.log(result.user)

                Swal.fire(
                    'Good job',
                    'you have sign up successfully',
                    'success'
                  )
                  e.target.reset()
                  navigate('/')
                  
                updateProfile(result.user, {
                  displayName:name, photoURL:img
                  
                })
            })
            .catch(error => {
                console.log(error)
            })



    }

   const handleGoogle= ()=>{
      googleSignIn()
      .then(result=>{
          console.log(result.user)
      })
      .catch(err=>{
        console.log(err)
      })
   }

    return (

        <div className="hero min-h-screen bg-[url('https://i.ibb.co/pffTTkR/1706e25eac3c20ab4bf5d2062264a288af29f496-1324x742.webp')] py-10">
            <div className="card flex-shrink-0 w-full max-w-xs md:max-w-md shadow-2xl border bg-slate-200 bg-opacity-80">
                <div className="card-body">
                    <form onSubmit={handleForm}>
                        <h1 className="text-3xl md:text-5xl font-bold text-center pb-5">Sign-up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="Photo url" placeholder="Enter your photo url" name="photoUrl" className="input input-bordered" required />
                        </div>

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
                            <button className="btn bg-[#F39318] hover:text-[#216AA7] ">Register</button>
                            <button onClick={handleGoogle} className="btn border my-5">
                                <FcGoogle className="text-3xl"></FcGoogle>
                                Sign in with Google</button>
                        </div>
                        <div className="text-center my-6 flex flex-col">

                            <button href="#" className="text-sm font-bold  text-black m-1">
                                If you already have a account <br />
                                <Link to='/login' className="text-[#F39318]">Please Login</Link> </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Register;