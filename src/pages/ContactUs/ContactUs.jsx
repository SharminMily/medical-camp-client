import Cover from '../Shared/Cover/Cover';

import { Helmet } from 'react-helmet-async';
import NavBar from '../Shared/NavBar/NavBar';

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

                <div className="hero h-[80vh] bg-base-200">
                    <div className="hero-content items-center justify-center flex-col flex">                        
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered w-[50vh]" required />
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
        </div>
    );
};

export default ContactUs;