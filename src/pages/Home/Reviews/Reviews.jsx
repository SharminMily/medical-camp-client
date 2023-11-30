import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-20'>
            <SectionTitle heading="reviews" subHeading="medical Camp Review" description="What Our Client say about Medical management system">                
            </SectionTitle>

           

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"></Swiper>

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(reviews => <SwiperSlide key={reviews._id}>
                            <div className='m-10'>
                                <h1 className="text-2xl text-cyan-500 text-center">{reviews.name}</h1>
                                <p>{reviews.details}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;