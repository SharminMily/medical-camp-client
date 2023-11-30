import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className="text-center my-20 ">
            <div className="flex justify-center items-center">
                <h1 className="text-red-500 text-6xl font-bold pb-4 gap-4">404 </h1>
                <MdErrorOutline  className="text-5xl text-red-500"/>
            </div>
            <h1 className=" text-4xl font-bold ">Oops... </h1>
            <p className='mb-4 text-red-500 text-xl'>Something went wrong..!</p>
            <Link to="/">
                <button className="p-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-6 py-4 text-center me-2 mb-2   text-white ">Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;