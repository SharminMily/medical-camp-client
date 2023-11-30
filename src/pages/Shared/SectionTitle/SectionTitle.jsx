/* eslint-disable react/prop-types */

import { FaRegStar } from "react-icons/fa6";
const SectionTitle = ({subHeading, heading, description}) => {
    return (
        <div className="mx-auto text-center md:w-6/12 my-8">
            <p className="text-cyan-500 font-bold flex justify-center items-center"><FaRegStar /> <FaRegStar />- {subHeading} - <FaRegStar /> <FaRegStar /></p>
            <h3 className="text-3xl font-bold uppercase py-4">{heading}</h3>
            <p>{description}</p>
           
        </div>
    );
};

export default SectionTitle;