import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const OrganizerProfile = () => {
    const {user} = useAuth();
    const {admin} = useAdmin();
    return (
        <div className="">
              <Helmet>
                <title>Organizer | Profile</title>                
            </Helmet>                   
             <h1 className="text-4xl font-semibold text-blue-600">
                <span className="text-black font-normal">Hey Welcome </span>
                {
                   user.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default OrganizerProfile;