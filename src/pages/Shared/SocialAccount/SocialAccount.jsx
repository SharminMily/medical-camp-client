import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialAccount = () => {

    const {googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = (media) => {  
        media()
        .then(res => console.log(res))       
            console.log("res.user")
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(location?.state? location.state : '/')
        .catch(err => console.log(err))            
    }


    return (
        <div className=" flex justify-center ">
            <h1 className="text-bold mr-2 text-cyan-500 font-bold">Or sing in with</h1>
            <button  onClick={() => handleGoogle(googleLogin)} type="button" className="text-blue-700 border border-blue-700 hover:bg-cyan-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-cyan-500 ">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialAccount;