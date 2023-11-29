import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPassword, setPassword] = useState(false);
    const captchaRef = useRef(null);
    const [disabled, setDisable] = useState(true);
    const { createUser, user, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    //     try{
    //         await createUser(email, password)
    //         console.log('Create', user)
    //         Swal.fire({
    //           position: "top-end",
    //           icon: "success",
    //           title: "Your work has been saved",
    //           showConfirmButton: false,
    //           timer: 1500
    //         });

    //         toast.success('Successfully create user!')  

    //         navigate(location?.state? location.state : '/')

    //      }
    //      catch(err) {
    //         Swal.error(err.message)
    //      }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value
        console.log('hello', name, email, img, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }


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

                                    <form onSubmit={handleSubmit} className="card-body ">
                                        {/* name */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" className="input  input-bordered md:px-10" name='name' />
                                        </div>
                                        {/* email */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input  input-bordered md:px-10" name='email' />
                                        </div>
                                        {/* image */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image Url</span>
                                            </label>
                                            <input type="text" placeholder="image url" name='img' className="input input-bordered md:px-10" />
                                        </div>
                                        {/* password */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>

                                            <div className="mb-6">
                                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input absolute input-bordered md:px-7" name='password' />
                                                <span onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEye className="relative top-4 md:left-52 left-48"></FaEye> : <FaEyeSlash className="relative top-4 md:left-52 left-48"></FaEyeSlash>}</span>

                                            </div>

                                            {/* Captcha */}
                                            <div className="form-control mt-2">
                                                <label className="label ">
                                                    <LoadCanvasTemplate />
                                                </label>
                                                <input ref={captchaRef} type="captcha" placeholder="type the captcha above" className="input  input-bordered md:px-10" name='captcha' />
                                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2 text-cyan-500">validate</button>
                                            </div>

                                        </div>

                                        <div className="form-control mt-6 p-0">
                                            <input disabled={disabled} className="btn bg-cyan-500 text-white" type='submit' value="register" />
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