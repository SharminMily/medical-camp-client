import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PRegisteredCamp = () => {
    const [cart, refetch] = useCart();
    // const totalFree = cart.reduce((total, item) => total + item.campFrees, 0);
    const totalFee = cart.reduce((total, items) => total + items.campFees, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Participant | Registered Camp</title>
            </Helmet>
            <SectionTitle subHeading="Registered Camp"></SectionTitle>
            
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl font-semibold">Total Camp {cart.length}</h2>
                <h2 className="text-3xl font-semibold">Total Fee: {totalFee}</h2>
               {
                cart.length ?  <Link to='/dashboard/paymentHistory'><button className="btn bg-cyan-500 text-white hover:bg-black">Pay</button></Link>
                :
                <button disabled className="btn bg-cyan-500 text-white hover:bg-black">Pay</button>
               }
            </div>

            <div className="overflow-x-auto">
                <table className="table md:w-full">
                    {/* head */}
                    <thead className="bg-cyan-500text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Camp Name</th>
                            <th>Date & Time</th>
                            <th>Free</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.campName}
                                </td>
                                <td>
                                    {item.date} <br></br>
                                    {item.time}
                                </td>
                                <td>${item.campFees}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PRegisteredCamp;