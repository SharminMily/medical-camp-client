import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularCCard from "./PopularCCard";
import { Link } from "react-router-dom";

const PopularCamp = () => {
    const [allCamps, setAllCamps] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/camps')
            .then(res => res.json())
            .then(data => setAllCamps(data))
    }, []);
    // console.log(allCamps)

    return (
        <div className="my-8">
            <SectionTitle heading="Popular Camp" subHeading="Our Popular Medical Camp" description=""></SectionTitle>
            <div className="">
                <div className='mx-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center'>
                    {
                        allCamps.slice(0, 6).map(camps => <PopularCCard key={camps.camp_id} camps={camps}></PopularCCard>)
                    }

                </div>
                <div className="flex justify-center items-center my-4">
                    <Link to='/availableCamps'><button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-base px-10 py-3 text-center me-2 mb-2">See All
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCamp;