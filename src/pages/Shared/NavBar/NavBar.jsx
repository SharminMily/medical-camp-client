/* eslint-disable react/no-unknown-property */

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const NavOptions = <>
        <li>
            <NavLink to='/' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/services' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">services
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">about
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">contact
            </NavLink>
        </li>

        <li>
            <NavLink to='about' className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">setting
            </NavLink>
        </li>
    </>

    return (
        <>
            <div className="navbar bg-gray-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content h-screen static p-6 z-[1] shadow bg-base-200 w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/pZH3B3j/IMG-20231125-133612.png" alt="" className="md:w-40 w-32 md:ml-10 ml-6" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;