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

    return (
        <div className='mx-20 my-12 pt-6 px-6 bg-gray-50'>
            <SectionTitle heading="reviews" subHeading="medical Camp Top Review" description="What Our Client say about Medical management system">
            </SectionTitle>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"></Swiper>

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(reviews => <SwiperSlide key={reviews._id}>
                            <div className='my-16 mx-24 flex flex-col items-center text-center'>
                                <img className='w-24 rounded-full mb-2' src={reviews.image} alt="" />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviews.rating}
                                    readOnly
                                />
                                <p className='mt-4'>{reviews.details}</p>
                                <h1 className="text-2xl text-cyan-500 font-semibold text-center my-4">{reviews.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;