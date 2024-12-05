import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(() => {
                console.log('success Sign Out')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const navLinks = <>
        <li><NavLink className='rounded-full' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded-full' to='/allEquipments'>All Equipments</NavLink></li>
        <li><NavLink className='rounded-full' to='/addEquipments'>Add Equipments</NavLink></li>
        <li><NavLink className='rounded-full' to='/myEquipments'>My Equipments</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl rounded-full">EquiSports</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end items-center">
                {
                    user ?
                        <>
                            <img className='h-12 w-12 object-cover border p-1 rounded-full bg-purple-600/15 mr-2' src={user?.photoURL} alt="" />
                            <Link onClick={handleSingOut} className='btn btn-ghost rounded-full'>Log Out</Link>
                        </>

                        :
                        <>
                            <NavLink to='/SignIn' className='text-xs btn btn-ghost  rounded-full md:text-base'>Sign In</NavLink>
                            <NavLink to='signUp' className='text-xs btn btn-ghost  rounded-full md:text-base'>Sign Up</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;