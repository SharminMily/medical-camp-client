import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="my-8 mx-20">

            <SectionTitle heading="About us" subHeading="About us" description="Medical Camp Management is a compassionate initiative driven by a dedicated team committed to bringing healthcare to communities in need."></SectionTitle>

            <div className="lg:flex flex-row card-side bg-base-100 shadow-xl">
                <div className="card flex-1">
                    <p className='absolute textStyle font-bold  text-center mt-8 mx-2 text-cyan-400 p-2'>-Our Medical Camp Management team.</p>
                    <figure><img src="https://i.ibb.co/QkM1Xgb/about-Dr-removebg-preview.png" alt="Movie" className='relative' /></figure>
                </div>
                <div style={{ borderRadius: '0px 0px 0px 550px' }} className="card-body flex-1 bg-cyan-400 text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium border border-cyan-500 text-end ">
                    <h2 className="text-bold text-2xl underline">Why Choose Us..!</h2>
                    <p>Experience:- With a wealth of experience in medical camp management,</p>
                    <p>Dedicated Team:- Our passionate and skilled team.</p>
                    <p className='text-xl underline'>Services We Provide:-</p>
                    <p className='text-sm font-normal'>Comprehensive health check-ups</p>
                    <p className='text-sm font-normal'>Immunizations and preventive care</p>
                    <p className='text-sm font-normal'>Dental and eye care services</p>
                    <p className='text-sm font-normal'>Health education and awareness programs</p>
                    <p className='text-sm font-normal'>Community outreach and engagement</p>

                    <div className="card-actions justify-end">                        
      <button className="btn glass lg:text-base md:p-4 p-1 text-xs hover:bg-cyan-500 text-center text-white">See More details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;