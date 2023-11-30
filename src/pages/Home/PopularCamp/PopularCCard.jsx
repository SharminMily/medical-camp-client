/* eslint-disable react/prop-types */
import { IoLocationOutline, IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PopularCCard = ({ camps }) => {
    const { _id, Camp_id, CampName, Details, CampFees, Date, Location, Time, Services, Image } = camps;

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
                <div className="card flex flex-col-reverse bg-base-100 shadow-xl border">

                    <div className="card-body pt-3 py-6">

                        <div className="flex px-4 py- justify-center hover:text-white hover:bg-black   rounded-full border border-cyan-500">
                            <h1 className="text-xl text-cyan-500 font-bold">Fee: ${CampFees}</h1>
                        </div>

                        <h2 className="text-sm flex justify-start items-center "><IoLocationOutline />{Location}</h2>
                        <h2 className="text-sm flex justify-start items-center "><IoTime className="mr-1 text-lg text-cyan-700" /> {Date}, {Time}</h2>
                        <h5 className="card-title font-semibold">
                            {CampName}
                        </h5>
                        <p>{Details}</p>

                        <div className="flex justify-center gap-2">
                            <button onClick={() => document.getElementById(Camp_id).showModal()} className='btn bg-cyan-600 text-white hover:bg-black '>More Details</button>

                            {/* <Link to={`/wishlist/${_id}`}><button className="btn  btn-outline btn-primary hover:btn-black">wishlist</button></Link> */}
                            {/*  onClick={() => handleDetailBtn(Camp_id)} */}

                            <Link> <button onClick={handleAddToCamp} className='btn  btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Add Camp</button></Link>
                        </div>
                    </div>
                    <div className="">
                        <figure><img src={Image} alt="" className="h-[45vh] w-full" /></figure>
                    </div>
                </div>

                {
                    <dialog id={Camp_id} className="modal modal-bottom sm:modal-middle">
                        <form method="dialog" className="modal-box ">

                            <div className="card bg-base-100 rounded-lg">
                                <figure className="px-10 pt-10">
                                    <img src={Image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <div className='flex justify-between gap-2'>
                                        <button className="btn btn-outline btn-primary  
                                     text-base normal-case">{Date}</button>
                                        <button className='btn btn-outline btn-primary text-base'>{Time}</button>
                                    </div>
                                    <h2 className="card-title font-bold text-2xl text-blue-600">{CampName}</h2>
                                    <p>{Location}</p>
                                    <p>{Details}</p>
                                    <div className="card-actions">
                                        <div className="rating w-24 rating-lg rating-half">
                                            <input type="radio" name="rating-10" className="rating-hidden" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-1" checked />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-1" />
                                            <input type="radio" name="rating-10" className="bg-[#F85559] mask mask-star-2 mask-half-2" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="modal-action flex justify-center">
                                <button className="btn btn-outline btn-error">Close</button>
                            </div>
                        </form>
                    </dialog>
                }

            </div>
        </>
    );
};

export default PopularCCard;