/* eslint-disable react/no-unknown-property */
import { FaArrowLeft, FaArrowRight, FaGithub, FaGoogle, FaLinkedin, FaPinterest } from 'react-icons/fa6';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './AboutUs.css';
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="my-8 mx-20">

            <SectionTitle heading="About us" subHeading="About us" description="Medical Camp Management is a compassionate initiative driven by a dedicated team committed to bringing healthcare to communities in need."></SectionTitle>

            <div className="lg:flex flex-row card-side bg-base-200 shadow-xl ">
                <div className="card flex-1 ">

                    <p className='absolute textStyle font-bold  text-center mt-8 mx-2 text-cyan-400 p-2 '>-Our Medical Camp Management team.</p>
                    <figure><img src="https://i.ibb.co/QkM1Xgb/about-Dr-removebg-preview.png" alt="Movie" className='relative' /></figure>
                    {/* social icon button */}
                    <p className='mx-4 text-center'>
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

                <div style={{ borderRadius: '0px 0px 0px 550px' }} className="card-body flex-1 bg-cyan-400 text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium border border-cyan-500 text-end ">
                    <h2 className="text-bold text-2xl underline">Why Choose Us..!</h2>
                    <p>Experience:- With a wealth of experience in medical camp management,</p>
                    <p>Dedicated Team:- Our passionate and skilled team.</p>
                    <p className='text-xl underline'>Services We Provide:-</p>
                    <p className='text-sm font-normal'>Comprehensive health check-ups</p>
                    <p className='text-sm font-normal'>Immunizations and preventive care</p>
                    <p className='text-sm font-normal'>Dental and eye care services</p>
                    <p className='text-sm font-normal'>Health education and awareness programs</p>
                    <p className='text-sm font-normal'>Community outreach and engagement</p>

                    <div className="card-actions justify-end">
                        <button className="btn glass lg:text-base md:p-4 p-1 text-xs hover:bg-cyan-500 text-center text-white">See More details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;