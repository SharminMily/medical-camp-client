import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddCamps = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, items) => total + items.CampFees, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = _id => {
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

                axiosSecure.delete(`/carts/${_id}`)
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
                <title>Medical Camp | Add Camp</title>
            </Helmet>
            <SectionTitle subHeading="Add Camp here"></SectionTitle>
            <div className="text-center ">                
                <div className="flex justify-center items-center md:gap-10 gap-4">
                <h2 className="md:text-3xl font-semibold ">Camp: {cart.length} </h2>
                    <h2 className="md:text-3xl font-semibold ">Total Price: {totalPrice} </h2>
                    <button className="btn bg-cyan-500 text-white">Pay</button>
                </div>
            </div>

            <div className="overflow-x-auto  mt-4 ">
                <table className="table md:w-full">
                    {/* head */}
                    <thead className="bg-cyan-500text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Camp Name</th>
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
                                                <img src={item.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.CampName}
                                </td>
                                <td>${item.CampFees}</td>
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

export default AddCamps;