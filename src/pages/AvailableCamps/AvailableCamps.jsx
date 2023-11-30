import { useEffect, useState } from "react";
import AvailableCCard from "./AvailableCCard";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import NavBar from "../Shared/NavBar/NavBar";
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {
    const [allCamps, setAllCamps] = useState([]);

    useEffect(() => {
        fetch('https://medical-camp-server-tau.vercel.app/camps')
            .then(res => res.json())
            .then(data => setAllCamps(data))
    }, []);
    // console.log(allCamps)
    return (
        <>
            <Helmet>
                <title>Medical Camp | Available Camp</title>
            </Helmet>
            <NavBar></NavBar>
            <Cover img={"https://i.ibb.co/r40gT2p/medical-Banner8.png"} title={"Medical Camp Here"} description={"Medical camps offer a variety of healthcare services to communities, especially in areas where regular access to medical facilities may be limited. The services provided during medical camps are often diverse, aiming to address both preventive and curative aspects of healthcare."}>
            </Cover>

            <SectionTitle heading="All MCMS Here" subHeading="medical camp" description=""></SectionTitle>

            <div className='bg-gray-200 min-h-screen p-8 my-16 w-full max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 items-center'>

                {
                    allCamps.map(camps => <AvailableCCard key={camps.Camp_id} camps={camps}></AvailableCCard>)
                }

            </div>
        </>
    );
};

export default AvailableCamps;