import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Register = () => {    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const captchaRef = useRef(null);
    const [disabled, setDisable] = useState(true);
    const { createUser, user, } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value
    //     const email = e.target.email.value
    //     const img = e.target.img.value
    //     const password = e.target.password.value
    //     console.log('hello', name, email, img, password)
    // }

    const onSubmit = data => {
       console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                
                .catch(error => console.log(error))
            })
    };


    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value);
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false)
    //     }
    //     else {
    //         setDisable(true)
    //     }
    // }


    return (
        <>
            <Helmet>
                <title>Medical Camp | register</title>
            </Helmet>
            <div className="hero min-h-screen  bg-gray-100">
                <div className="hero-content flex-col">
                    <h1 className="text-3xl p-6 font-bold text-cyan-500 ">Please Register Here...!</h1>

                    <div className=" md:flex gap-4 flex-row-reverse">
                        <div className="flex-1 md:flex justify-center items-center lg:mb-0 mb-4 lg:visible hidden">
                            <img src="https://i.ibb.co/L6JXPdd/authentication.gif" alt="" className="w-[70vh] h-[80vh] rounded-2xl" />
                        </div>

                        <div className="flex justify-center items-center">

                            <div className="card flex-1 items-center align-middle w-full max-w-xl shadow-2xl  px-10" data-aos="zoom-in">
                                <div className="pb-8">

                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                            {errors.name && <span className="text-red-600">Name is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                            {errors.email && <span className="text-red-600">Email is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })} placeholder="password" className="input input-bordered "   />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}                                            

                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <input className="btn btn-primary" type="submit" value="register" />
                                        </div>
                                    </form>


                                    <label className="label">
                                        Have an account? <Link to="/login" className="label-text-alt link link-hover text-blue-700  font-bold underline">Please Login</Link>
                                    </label>
                                    {/* <SocialLogin></SocialLogin> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;