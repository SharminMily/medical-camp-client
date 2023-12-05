/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
// import useCart from "../../../hooks/useCart";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const NavOptions = <>
        <li>
            <NavLink to='/' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/availableCamps' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Available Camps
            </NavLink>
        </li>

        {/* <li>
            <NavLink to='/addCamp' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Camp
            </NavLink>
        </li> */}
        {/* <button className="btn">Inbox
            <div className="badge badge-secondary">+{cart.length}</div>
        </button> */}

        <li>
            <NavLink to='/dashboard' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard
            </NavLink>
        </li>

        <li>
            <NavLink to='/contact' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">contact us
            </NavLink>
        </li>



    </>

    return (
        <>
            <div className="navbar h-[13vh] fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content h-screen static p-2 z-[1] shadow bg-base-200 w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/pZH3B3j/IMG-20231125-133612.png" alt="" className="md:w-40 w-28 h-[15vh] md:ml-10 ml-6" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                {/* login,logout, user */}
                <div className="navbar-end">
                    {user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black hover:text-black rounded-box w-52">
                            <li>
                                <button className='btn btn-sm  text-blue-600 hover:text-black'>Name: {user?.displayName} </button>
                                <button className="btn btn-sm  btn-ghost hover:text-black">{user?.email}</button>

                            </li>
                            <li>
                                <button onClick={handleLogOut}
                                    className="btn btn-sm btn-ghost bg-cyan-500 text-white hover:text-black">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <NavLink to="/login"><a className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Login</a></NavLink>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;