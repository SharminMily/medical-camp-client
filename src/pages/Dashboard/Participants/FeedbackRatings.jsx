import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const FeedbackRatings = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        // console.log(data)
        // //  
    }

    return (
        <div>
            <Helmet>
                <title>Participant | Feedback & Ratings</title>
            </Helmet>
            <h1 className="text-3xl text-center my-4">Feedback and Ratting</h1>
            <div>
                <h1 className="text-center text-cyan-500 font font-semibold text-3xl "></h1>
                <div className="md:mx-16">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center items-center gap-4">
                            {/* Your name */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    {...register('campName', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>

                            {/*Rating */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Ratting</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Ratting"
                                    {...register('campFees', { required: true })}
                                    className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/*  */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Feedback</span>
                            </label>
                            <textarea {...register('feedback')} className="textarea textarea-bordered h-52" placeholder="Your feedback"></textarea>
                        </div>

                        <button className="btn mt-4 bg-cyan-500 text-white text-lg">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackRatings;