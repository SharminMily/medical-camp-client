import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateCamp = () => {
    const { _id, campName, details, campFees, date, location, time, image } = useLoaderData();

    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        // console.log(data)
        // 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
            // 
            const campItem = {
                campName: data.campName,
                campFees: data.campFees,
                date: data.date,
                details: data.details,
                location: data.location,
                time: data.time,
                image: res.data.data.display_url,
                // services: data.services[0][1][2],
            }
            const campRes = await axiosSecure.patch(`/camps/${_id}`, campItem);
            // console.log(campRes.data)
            if (campRes.data.modified > 0) {
                reset();
                         
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.campName} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log('with image url ', res.data)
    }

    return (
        <div>
            <SectionTitle subHeading="update camp info"></SectionTitle>

            <div className="">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* CampName */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Camp Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={campName}
                            placeholder="Camp Name"
                            {...register('campName', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* Time and Date */}
                    <div className="flex gap-6">
                        {/* Time */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Time*</span>
                            </label>
                            <input
                                type="time"
                                defaultValue={time}
                                placeholder="Time"
                                {...register('time', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>

                        {/* Date */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <input
                                type="date"
                                defaultValue={date}
                                placeholder="Date"
                                {...register('date', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Location*</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={location}
                                placeholder="Location"
                                {...register('location', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        {/*CampFees */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Camp Fees*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={campFees}
                                placeholder="Camp Fee"
                                {...register('campFees', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* Specialized Services */}
                    <div className="flex gap-2 w-full justify-between">
                        {/* services 1 */}
                        {/* <div className="form-control">
            <label className="label">
                <span className="label-text">Services - 1</span>
            </label>
            <textarea {...register('services[0]')} className="textarea lg:w-[40vh]   textarea-bordered " placeholder=" Specialized Services - 1 "></textarea>
        </div> */}
                        {/* services 2 */}
                        {/* <div className="form-control">
            <label className="label">
                <span className="label-text">Services - 2</span>
            </label>
            <textarea {...register('services[1]')} className="textarea lg:w-[40vh] textarea-bordered " placeholder=" Specialized Services - 2 "></textarea>
        </div> */}
                        {/* services 3 */}
                        {/* <div className="form-control">
            <label className="label">
                <span className="label-text">Services - 3</span>
            </label>
            <textarea {...register('services[2]')} className="textarea lg:w-[40vh] textarea-bordered " placeholder=" Specialized Services - 3 "></textarea>
        </div> */}
                    </div>

                    {/* camp details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Camp Details</span>
                        </label>
                        <textarea {...register('details')}
                            defaultValue={details} className="textarea textarea-bordered h-24" placeholder="Details Camp"></textarea>
                    </div>

                    {/* image uploaded */}
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file"
                            className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn bg-cyan-500 text-white text-lg">
                        update Camp
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateCamp;