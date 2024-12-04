import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';

const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // emailPasswordSignIn(email, password)
        //     .then((result) => {
        //         notifySuccess()
        //         navigate(location?.state ? location.state : '/')
        //     })
        //     .catch((error) => {
        //         return toast.error("Please input correct email and password")
        //     })
    }

    return (
        <div>
            <div className="flex justify-center items-center md:min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
                {/* Form Container */}
                <div className="card w-full max-w-md p-8 bg-white shadow-2xl rounded-xl border-t-4 border-purple-500">
                    <h1 className="md:text-3xl text-xl text-center font-serif font-bold mb-6 text-purple-600">
                        Login to Your Account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-700">
                                <span>Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label font-medium text-gray-700">
                                <span>Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                required
                            />
                            {/* Forgot Password Link */}
                            <label className="label mt-1">
                                <a href="#" className="text-sm text-purple-500 hover:underline">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        {/* Submit Button */}
                        <div className="form-control">
                            <button className="btn w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-700">
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Divider */}
                    <div className="text-center my-4 text-gray-500 relative">
                        <span className="bg-white px-3">OR</span>
                        <hr className="absolute top-3 w-full border-gray-300" />
                    </div>
                    {/* Google Login Button */}
                    <div className="flex justify-center">
                        <GoogleSignIn />
                    </div>
                    {/* social sign in */}
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-500 font-semibold hover:underline">
                            sign up
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SignIn;
