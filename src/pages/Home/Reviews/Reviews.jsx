import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews)

    return (
        <div className='mx-20 my-12 pt-6 px-6 bg-gray-50'>
            <SectionTitle subHeading="What Our Patients Says" heading="Testimonials">
            </SectionTitle>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"></Swiper>

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(reviews => <SwiperSlide key={reviews._id}>
                            <div className='my-16 mx-24 flex flex-col items-center text-center'>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviews.rating}
                                    readOnly
                                />
                                <p className='mt-4'>{reviews.description}</p>

                                <div className='mt-4 flex justify-center items-center gap-2'>
                                    <img className='w-16 rounded-full border-double border-cyan-600 border mb-2' src={reviews.image} alt="" />
                                    <div className="">
                                        <h1 className="text-lg text-cyan-600 font-semibold ">{reviews.name}</h1>
                                        <p className='text-center'>{reviews.date}</p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;