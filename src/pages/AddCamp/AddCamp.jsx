import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import AddCampCard from "./AddCampCard";
import NavBar from "../Shared/NavBar/NavBar";


const AddCamp = () => {

    const [camps, setCamps] = useState([]);
    const [notFound, setNoFound] = useState(false);
    const [isSee, setIsSee] = useState(false)
    console.log(camps)

    useEffect(() => {
        const campListItem = JSON.parse(localStorage.getItem('camps'));
        if (campListItem) {
            setCamps(campListItem)
        }
        else {
            setNoFound(' No camps Found')
        }

    }, [])


    const handleRemove = () => {
        localStorage.clear()
        setCamps([]);
        setNoFound(' No Blog Found')
        // toast.success("delete successfully")

    }

    // console.log(donation)


    return (
        <div>
            <NavBar></NavBar>           
            <SectionTitle subHeading="Add Card" heading="Add to Card"></SectionTitle>

            <div>
                {
                    notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div>

                        {camps.length > 0 && <button onClick={handleRemove} className='p-4 bg-red-500 text-white rounded-lg mx-auto block'>delete All</button>}

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
                            {
                                isSee ? camps.map(camp => <AddCampCard key={camp._id} camp={camp}></AddCampCard>) :
                                    camps.slice(0, 4).map(camp => <AddCampCard key={camp._id} camp={camp}></AddCampCard>)
                            }
                        </div>
                    </div>
                }

                <div className='text-center my-8'>
                    {/* {donation.length > 4 && <button onClick={()=>setIsSee(!isSee)}  className='p-4 bg-blue-700  text-white rounded-lg mx-auto block'> {isSee ? "See less" : "See All"} </button>   
                }  */}
                    {camps.length > 4 && !isSee && (
                        <button
                            onClick={() => setIsSee(!isSee)}
                            className='p-4 bg-blue-700 text-white rounded-lg mx-auto block'
                        >
                            See All
                        </button>
                    )}
                </div>


            </div>


        </div>
    );
};

export default AddCamp;