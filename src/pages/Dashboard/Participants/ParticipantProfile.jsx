import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const ParticipantProfile = () => {
    const {user} = useAuth();
    return (
        <div>
             <Helmet>
                <title>Participant | Profile</title>                
            </Helmet>
            <h1 className="text-3xl font-semibold text-blue-600">
                <span className="text-black font-normal">Hey Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default ParticipantProfile;