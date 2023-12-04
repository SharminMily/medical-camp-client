import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCamp from "../../../hooks/useCamp";
import Swal from "sweetalert2";

const ManageCamp = () => {
    const [camp, refetch] = useCamp();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/camps/${item._id}`);
                // console.log(res.data) res.data.deletedCount > ;
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item.campName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Organizer | Manage Camps</title>
            </Helmet>

            <div className="">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-cyan-500 text-lg text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Camp Name</th>
                            <th>Fee</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            camp.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
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
                                <td className="text-right">${item.campFees}</td>
                                <td>
                                    <Link to={`/dashboard/updateCamp/${item._id}`}>
                                        <button
                                            className="btn btn-ghost btn-base bg-cyan-500">
                                            <FaEdit className="text-white 
                                        "></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-cyan-500 text-2xl"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageCamp;