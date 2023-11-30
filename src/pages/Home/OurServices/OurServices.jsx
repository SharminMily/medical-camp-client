import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurServices = () => {

    const [healthCare, setHealthCare] = useState([]);

    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setHealthCare(data))
    }, []);
    console.log(healthCare)

    return (
        <div className="my-20 ">
            <div>
                <SectionTitle subHeading="Health Care" heading="Our Health care Service" description="
Medical camps offer a variety of healthcare services to communities, especially in areas where regular access to medical facilities may be limited.Here are some common types of medical camp services."></SectionTitle>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 m-2 bg-gray-50 p-10 shadow-lg">
                {/* card -1 */}

                {
                    // healthCare.map(camps => <i key={camps.Camp_id} ></i>)
                    healthCare.map(camps =>  <div key={camps.Camp_id} style={{ borderRadius: '5px 5px 100px 5px' }} className="card border hover:bg-cyan-500 hover:text-white border-cyan-400 bg-base-100 shadow-xl">
                    <div className="card-body">
                       <div  className=" flex justify-center items-center">
                       <img style={{ borderRadius: '200px 200px 200px 200px' }} src="https://i.ibb.co/N6QJdpV/medical-Banner9.png" alt="" className="w-24 border border-cyan-500 h-20 rounded-full" />
                       </div>
                        <h1 className="text-base font-bold">{camps.name}</h1>
                        <p className="">
                           {camps.description}
                        </p>
                        <button className="btn btn-xl  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ">more details</button>
                    </div>
                </div>)
                }     
               

            </div>


        </div>
    );
};

export default OurServices;