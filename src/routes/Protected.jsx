import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Protected = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <div className='py-20 md:py-40 text-center'><span className="loading loading-ring loading-lg text-center"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default Protected;