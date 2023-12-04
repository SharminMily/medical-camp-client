import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialAccount from "../Shared/SocialAccount/SocialAccount";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()



    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the date database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if(res.data.insertedId){
                                console.log('user added to the database')
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User created successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate("/")
                            }
                        })                      
                        

                    })
                    .catch(error => console.log(error))
            })
    };


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

                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered md:px-12" />
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
                                            <input type="password" {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })} placeholder="password" className="input input-bordered " />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                                            <label className="label pb-0">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <input className="btn border border-blue-700 hover:bg-cyan-500   focus:ring-4  focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center bg-cyan-500 items-center dark:border-blue-500  dark:focus:ring-blue-800 dark:hover:bg-cyan-500 text-white" type="submit" value="register" />
                                        </div>
                                    </form>

                                    <label className="label text-blue-700 font-bold  text-base mt-0 pt-0">
                                        Have an account? <Link to="/login" className="label-text-alt link link-hover text-blue-700 text-sm  font-bold underline">Please Login</Link>
                                    </label>
                                    <SocialAccount></SocialAccount>
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