/* eslint-disable react/prop-types */
// import {  Iotime } from "react-icons/io5";
import { IoLocation, IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PopularCCard = ({ camps }) => {
    const { _id, camp_id, campName, details, campFees, date, location, time, image } = camps;

    const handleAddToCamp = () => {
        // console.log(blog)
        const addCampArray = [];

        const campListItem = JSON.parse(localStorage.getItem('camps'));
        if (!campListItem) {
            addCampArray.push(camps);
            localStorage.setItem('camps', JSON.stringify(addCampArray))
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "camp added successfully!",
                showConfirmButton: false,
                timer: 1500
            });

        }
        else {
            const isExits = campListItem.find((camps) => camps._id
                === _id
            )
            if (!isExits) {
                addCampArray.push(...campListItem, camps)
                localStorage.setItem('camps', JSON.stringify(addCampArray))
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "camp added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                //    toast.success("added!", "blog added successfully!", "success");
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Wrong",
                    text: "already added! No duplicate !"

                });
                //    toast.error("already added!", "No duplicate !", "error");
            }


        }

    }

    return (
        <>
            <div className=''>
                <div className="card flex flex-col bg-base-100 shadow-xl border">
                    <div className="relative">
                        <figure><img src={image} alt="" className="h-[45vh] w-full" /></figure>
                    </div>
                    <div className="flex absolute px-4 py-1 justify-center hover:text-white bg-black hover:bg-white border border-cyan-500">
                        <h1 className="text-xl text-cyan-500 font-semibold">Fee: ${campFees}</h1>
                    </div>

                    <div className="card-body pt-3 py-6">

                        <h2 className="text-sm flex justify-start items-center "><IoLocation  />{location}</h2>
                        <h2 className="text-sm flex justify-start items-center "> <IoTime /> {date}, {time}</h2>
                        <h5 className="card-title font-semibold">
                            {campName}
                        </h5>
                        <p>{details}</p>

                        <div className="flex justify-center gap-2">
                            <Link  to={`/popularCampDetails/${_id}`}><button className='btn bg-cyan-600 text-white hover:bg-black '>More details</button></Link>
                           
                            {/*  onClick={() => handleDetailBtn(camp_id)} */}

                            <Link> <button onClick={handleAddToCamp} className='btn  btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Add Camp</button></Link>
                        </div>
                    </div>

                </div>

            
            </div>
        </>
    );
};

export default PopularCCard;