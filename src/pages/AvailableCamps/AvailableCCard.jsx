/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { IoLocationOutline, IoTime } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
/* eslint-disable react/prop-types */
const AvailableCCard = ({ camps }) => {
    const { _id, camp_id, campName, details, campFees, date, location, time, image, services } = camps;

    const { user } = useAuth()
    const navigate = useNavigate();
    // const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const addCampArray = [];

    const handleAddToCamp = () => {
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

    const handleAddToCart = () => {
        // console.log(camp, user.email)
        if (user && user.email) {
            // send cart database
            // console.log(user.email, camp)
            const campItem = {
                campId: _id,
                email: user.email,
                campName,
                image,
                campFees

            }
            axiosSecure.post('/carts', campItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${campName} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //   refetch
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "you are not logged in",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user
                    navigate('/login', { sate: { from: location } })
                }
            });
        }
    }
    // onClick={() => handleAddToCart(camps)}

    const handleDetailBtn = Camp_id => {
        // console.log()
    }

    return (
        <>
           
                <div className="card bg-base-100 shadow-xl border">
                    <div className="relative">
                        <figure><img src={image} alt="Shoes" className="h-[45vh] w-full" /></figure>
                    </div>

                    <div className="absolute flex justify-center bg-black border border-cyan-500 hover:bg-white p-2">
                        <h1 className="text-xl text-cyan-500 font-semibold">Fee: ${campFees}</h1>
                    </div>
                    <div className=' p-2 m-4 mb-0 gap-8  rounded'>

                        <div className='flex justify-around items-center gap-6 text-cyan-500 font-bold'>
                            <p className="flex items-center gap-1"> <IoTime></IoTime> {date}</p>
                            <p> {time}</p>
                        </div>

                    </div>
                    <div className="card-body pt-4 py-4">
                        <h2 className="text-sm flex items-center gap-1">< IoLocationOutline />{location}</h2>
                        <h5 className="card-title font-semibold">
                            {campName}
                        </h5>
                        <p>{details}</p>
                        {/*  */}                      
                            <Link to={`/popularCampDetails/${_id}`}><button className='btn  btn-outline w-full border-cyan-500 text-cyan-500 hover:btn-black'>More Details</button></Link>                            

                            {/* <Link to={`/wishlist/${_id}`}><button className="btn  btn-outline btn-primary hover:btn-black">wishlist</button></Link> */}

                            {/* onClick={() => handleDetailBtn(Camp_id)} */}

                            {/* <button onClick={handleAddToCamp} className='btn  btn-outline border-cyan-500 text-cyan-500 hover:btn-black '>Add Camp</button> */}

                            {/* add cart */}
                            <button onClick={handleAddToCart} className=' btn bg-cyan-600 w-full text-white hover:bg-black'>Join Camp</button>
                        </div>
                    </div>
                       
          
        </>
    );
};

export default AvailableCCard;