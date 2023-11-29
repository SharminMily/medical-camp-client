import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import NavBar from "../Shared/NavBar/NavBar";

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Services</title>                
            </Helmet>
            <NavBar></NavBar>
            <Cover img={"https://i.ibb.co/r40gT2p/medical-Banner8.png"} title={"Our'e servicer Here"} description={"Medical camps offer a variety of healthcare services to communities, especially in areas where regular access to medical facilities may be limited. The services provided during medical camps are often diverse, aiming to address both preventive and curative aspects of healthcare."}></Cover>
        </div>
    );
};

export default Services;