import { useLoaderData } from "react-router-dom";
import {FiPhoneForwarded } from "react-icons/fi";

const PopularCampDetails = () => {

    const camp = useLoaderData()
    console.log(camp)



    const { _id, Camp_id, CampName, Details, CampFees, Date, Location, Time, Services, Image } = camp;



    return (
        <div className="mb-8">
            <div className="hero min-h-screen bg-gray-100">
                <div className="hero-content gpa-4 lg:flex-row-reverse flex-col justify-around items-center">
                    <div>
                        <img src={Image} className="md:max-w-lg max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="px-20 ">
                        <h1 className="md:text-4xl text-cyan-500 font-bold">{CampName}!</h1>
                        <p className="py-6 lg:w-80 text-gray-500 md:text-xl">{Details}</p>
                        {/* <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lg px-8 py-3 text-center me-2 mb-2">Confirm Booking</button> */}
                        <div className="flex gap-4">
                        <button className='btn px-8 text-lg  btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Add Camp</button>
                        <button className='btn text-lg  px-8   btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Add Camp</button>
                        </div>
                        <h1 className="text-2xl pb-2  mt-4">Today: <span className="bg-cyan-500 p-1 text-white text-lg w-36">{Time}</span></h1>
                        <p className="text-xl justify-start flex items-center"><FiPhoneForwarded />+92573150</p>
                    </div>


                </div>
            </div>

            <div className="grid items-center justify-around lg:grid-cols-3 grid-cols-1 bg-cyan-500 text-white text-xl p-10">
                <div className="bg-black p-10">{Services[0]}</div>
                <div className="bg-blue-900 p-10">{Services[1]}</div>
                <div className="bg-black  p-10">{Services[2]}</div>
            </div>
        </div>
    );
};

export default PopularCampDetails;