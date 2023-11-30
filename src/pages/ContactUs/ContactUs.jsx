import Cover from '../Shared/Cover/Cover';

import { Helmet } from 'react-helmet-async';
import NavBar from '../Shared/NavBar/NavBar';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaGithub, FaGoogle, FaLinkedin, FaPinterest } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Camp | contact us</title>
            </Helmet>
            <NavBar></NavBar>
            <Cover img="https://i.ibb.co/tKYDx81/medical-Banner7.png" title="Contact Us" description=""></Cover>

            <div className="m-28">

                <h1 className="text-4xl mb-8 text-center font-bold text-cyan-500">Submit your Email for contact</h1>

                <div className="hero ">
                    <div className="hero-content items-center justify-center flex-col flex">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body shadow-lg shadow-gray-500">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered md:w-[50vh]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-cyan-500 text-white">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mb-20 bg-gray-200 p-8 mx-20">
                <p className='mx-4 lg:flex flex-row justify-center items-center gap-2 text-center'>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:hover:bg-cyan-500 ">
                        <FaArrowRight className='text-xl' />
                        <h1 className="pl-2">Contact team</h1>
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:hover:bg-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-cyan-500 ">
                        <FaFacebookF />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:hover:bg-cyan-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:hover:bg-cyan-500 ">
                        <FaInstagramSquare />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:hover:bg-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:hover:bg-cyan-500 ">
                        <FaLinkedin />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:hover:bg-cyan-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:hover:bg-cyan-500 ">
                        <FaPinterest />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:hover:bg-cyan-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:hover:bg-cyan-500 ">
                        <FaGithub />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-cyan-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-cyan-500 ">
                        <FaGoogle />
                    </button>
                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-cyan-500 ">
                        <FaArrowLeft className='text-xl' />
                        <h1 className="pl-2 ">Contact team</h1>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ContactUs;