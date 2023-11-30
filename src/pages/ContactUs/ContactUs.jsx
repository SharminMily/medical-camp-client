import Cover from '../Shared/Cover/Cover';

import { Helmet } from 'react-helmet-async';
import NavBar from '../Shared/NavBar/NavBar';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
            <title>Medical Camp | contact us</title>  
            </Helmet>
            <NavBar></NavBar>
            <Cover img="https://i.ibb.co/tKYDx81/medical-Banner7.png" title="Contact Us" description=""></Cover>
        </div>
    );
};

export default ContactUs;