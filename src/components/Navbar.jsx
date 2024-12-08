import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import ThemeToggle from "../contexts/ThemeToggle";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // console.log("Successfully signed out");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink className="rounded-full dark:text-dark-text" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="rounded-full dark:text-dark-text" to="/allEquipments">
                    All Equipments
                </NavLink>
            </li>
            <li>
                <NavLink className="rounded-full dark:text-dark-text" to="/addEquipments">
                    Add Equipments
                </NavLink>
            </li>
            {user && <li>
                <NavLink className="rounded-full dark:text-dark-text" to="/myEquipments">
                    My Equipments
                </NavLink>
            </li>}
        </>
    );

    return (
        <div className="sticky top-0 left-0 z-50 shadow-md glass bg-[white] dark:bg-dark-background">
            <div className="container mx-auto navbar ">
                <div className="navbar-start ml-0 pl-0">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-light-background dark:bg-dark-background rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn p-0 btn-ghost text-xl rounded-full text-light-text dark:text-dark-text">
                        EquiSports
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end items-center">
                    <ThemeToggle />
                    {user ? (
                        <>
                            <Tooltip className="z-50" id="my-tooltip" />
                            <img
                                className="h-12 w-12 hidden sm:block object-cover border p-1 rounded-full bg-purple-600/15 mr-2"
                                src={user?.photoURL}
                                alt={user?.displayName || "User"}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user?.displayName || "No Name"}
                            />
                            <Link
                                onClick={handleSignOut}
                                className="btn btn-ghost rounded-full text-light-text dark:text-dark-text"
                            >
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/SignIn"
                                className="text-xs btn px-2 btn-ghost rounded-full md:text-base text-light-text dark:text-dark-text"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to="/signUp"
                                className="text-xs btn mr-0 px-2 btn-ghost rounded-full md:text-base text-light-text dark:text-dark-text"
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
