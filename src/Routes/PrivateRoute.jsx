/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center m-8">
            <span className="loading loading-spinner text-accent "></span>
        </div>
    }

    if(user){
        return children;
    } 
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;