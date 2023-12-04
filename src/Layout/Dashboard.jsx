/* eslint-disable no-unused-vars */
import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { MdOutlineHealthAndSafety, MdOutlineHandyman } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [isAdmin] = useAdmin()
    return (
        <div className="flex bg-gray-100">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen text-white bg-cyan-500">
                <ul className="menu  gap-2 py-6 px-2 text-base">
                    
                    {
                        isAdmin ?
                         <>
                            <li>
                                <NavLink to="/dashboard/organizerProfile">
                                    <FaHome></FaHome>
                                    Organizer Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addACamp">
                                    <FaUtensils></FaUtensils>
                                    Add A Camp</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageCamps">
                                    <FaList></FaList>
                                    Manage Camps</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/registeredCamps">
                                    <FaBook></FaBook>
                                    Manage Registered Camps</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/participantProfile">
                                        <FaHome></FaHome>
                                        participant profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/registeredCamps">
                                        <FaUsers></FaUsers>
                                        registered camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/healthcare">
                                        <MdOutlineHealthAndSafety></MdOutlineHealthAndSafety>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/feedbackRatings">
                                        <GiAchievement></GiAchievement>
                                        Feedback & Ratings
                                        </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/organizer">
                                        <MdOutlineHandyman></MdOutlineHandyman>
                                        Organizer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addCamp">
                                        <FaAd></FaAd>
                                        Add Camp
                                    </NavLink>
                                </li>

                            </>
                    }







                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/camp">
                            <FaSearch></FaSearch>Camp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

