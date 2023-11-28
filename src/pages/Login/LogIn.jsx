import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const LogIn = () => {
    const [showPassword, setPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('hello', email, password)
    }

    return (
        <div>

            <div className="hero min-h-screen bg-gray-300 ">
                <div className="hero-content flex-col">
                    <h1 className="text-3xl p-6 font-bold text-cyan-500 ">Please Login Now...</h1>

                    <div className=" lg:flex gap-4 flex-row">
                        <div className="flex-1 flex justify-center items-center lg:mb-0 mb-4">
                            <img src="https://i.ibb.co/L6JXPdd/authentication.gif" alt="" className="w-[70vh] h-[60vh] rounded-2xl" />
                        </div>

                        <div className="flex justify-center items-center">

                            <div className="card flex-1 items-center align-middle w-full max-w-lg bg-gray-100 shadow-2xl  px-10" data-aos="zoom-in">
                                <div className="pb-8">

                                    <form onSubmit={handleSubmit} className="card-body ">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input  input-bordered md:px-10" name='email' />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>

                                            <div className="mb-6">
                                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input absolute input-bordered md:px-7" name='password' />
                                                <span onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEye className="relative top-4 md:left-52 left-48"></FaEye> : <FaEyeSlash className="relative top-4 md:left-52 left-48"></FaEyeSlash>}</span>

                                            </div>

                                        </div>
                                        <div className="form-control mt-6 p-0">
                                            <button className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80" type='submit'>Login</button>
                                        </div>
                                    </form>


                                    <label className="label">
                                        Not registered.? <Link to="/register" className="label-text-alt link link-hover text-blue-700  font-bold underline"> Create account</Link>
                                    </label>
                                    {/* <SocialLogin></SocialLogin> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default LogIn;