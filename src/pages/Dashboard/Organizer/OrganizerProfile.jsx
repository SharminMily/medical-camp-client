import { Helmet } from "react-helmet-async";

const OrganizerProfile = () => {
    return (
        <div className="">
              <Helmet>
                <title>Organizer | Profile</title>                
            </Helmet>
            <h1 className="text-center text-4xl my-4 text-cyan-500 font-semibold underline"> Organizer Profile</h1>
            <div className="flex justify-center mt-16">
                <div className="flex flex-col gap-4 w-52">
                    <div className="flex gap-4 items-center">
                        <div className="skeleton w-16 h-16 rounded-full shrink-0">
                            <img className="rounded-full" src="https://i.ibb.co/3TdV40T/Screenshot-1356.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20">name</div>
                            <div className="skeleton h-4 w-28">email</div>
                        </div>
                    </div>
                    <div className="skeleton h-32 w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;