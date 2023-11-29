import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Medical Camp | Home</title>                
            </Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;