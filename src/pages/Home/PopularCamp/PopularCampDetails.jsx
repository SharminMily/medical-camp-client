/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { FiPhoneForwarded } from "react-icons/fi";

const PopularCampDetails = () => {

    const camp = useLoaderData()
    // console.log(camp)



    const { _id, camp_id, campName, details, campFees, date, location, time, image, services } = camp;



    return (
        <div className="mb-8">
            <div className="hero md:p-20 bg-gray-100">
                <div className="hero-content gpa-4 lg:flex-row-reverse flex-col justify-around items-center">
                    <div>
                        <img src={image} className="md:max-w-lg max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="px-20 ">
                        <h1 className="md:text-4xl text-cyan-500 font-bold">{campName}!</h1>
                        <p className="py-6 lg:w-80 text-gray-500 md:text-xl">{details}</p>
                        
                        <div className="flex gap-4">
                            <button className='btn md:px-8 text-lg  btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Join Camp</button>
                            <button className='btn text-lg  md:px-8 btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Registration</button>
                        </div>
                        <h1 className="text-2xl pb-2  mt-4">Today: <span className="bg-cyan-500 p-1 text-white text-lg w-36">{time}</span></h1>
                        
                    </div>


                </div>
            </div>

            <div className="text-center  bg-cyan-500 text-white text-xl p-10">               
                
                <div className="text-xl gap-1 text-center flex justify-center font-semibold items-center"><FiPhoneForwarded /><p className="">+9992573150</p></div>          
            </div>
               <h1 className="mt-20 text-center font-semibold text-2xl text-cyan-500">Specialized All Services</h1>

            <div className="mt-10 mx-10 mb-28 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {/* service -1 */}
            <div className="card  shadow-lg shadow-slate-700 bg-gray-100 ">               
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Services - 1</h2>
                        <p className="text-xl">{services[0]}</p>
                        <div className="card-actions justify-end">
                            <button className="btn hover:bg-black text-white bg-cyan-500 ">Accept</button>
                            <button className="btn btn-outline ">Deny</button>
                        </div>
                    </div>
              
                </div>
            {/* service - 2 */}
            <div className="card  shadow-lg shadow-slate-700 bg-gray-100 ">               
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Services - 2</h2>
                        <p className="text-xl">{services[1]}</p>
                        <div className="card-actions justify-end">
                            <button className="btn hover:bg-black text-white bg-cyan-500 ">Accept</button>
                            <button className="btn btn-outline ">Deny</button>
                        </div>
                    </div>
              
                </div>
            {/* service - 3 */}
            <div className="card shadow-lg shadow-slate-700 bg-gray-100 ">               
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Services - 3</h2>
                        <p className="text-xl">{services[2]}</p>
                        <div className="card-actions justify-end">
                            <button className="btn hover:bg-black text-white bg-cyan-500 ">Accept</button>
                            <button className="btn btn-outline ">Deny</button>
                        </div>
                    </div>
              
                </div>

            </div>
        </div>
    );
};

export default PopularCampDetails;