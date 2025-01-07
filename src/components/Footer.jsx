import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Footer = () => {
    return (
        <div className="flex justify-center">
            <footer className="footer bg-gradient-to-br from-black via-gray-900 to-gray-800 text-neutral-content p-10">
                <div className="footer-section md:pl-10">
                    <aside>
                        <div className="flex items-center justify-center mb-4 animate-pulse">
                            <h1 className="text-4xl font-semibold border-b-2 p-2">EquipSports</h1>
                        </div>
                        <p className="font-bold text-lg">
                            Your Ultimate Destination for Sports Gear
                        </p>
                        <p className="text-sm mt-2">
                            Explore the latest equipment, reviews, and expert tips.
                        </p>
                        <p className="mt-4 text-gray-400">
                            Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                    </aside>
                </div>

                <div className="footer-section md:pl-10">
                    <div>
                        <h2 className="font-bold text-lg mb-4">
                            Quick Links
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <span className="link link-hover hover:text-accent transition-all duration-300">
                                    <Link to={'/contactUs'}>Contact Us</Link>
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-accent transition-all duration-300">
                                    <Link to={'/about'}>About</Link>
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-accent transition-all duration-300">
                                    Supports
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-accent transition-all duration-300">
                                    Privacy Policy
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="footer-section md:pl-10">
                    <h2 className="font-bold text-lg mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="footer-section md:pl-10">
                    <h2 className="font-bold text-lg mb-4">Subscribe</h2>
                    <form onClick={(e) => e.preventDefault()} className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full max-w-xs bg-gray-700"
                        />
                        <button className="btn btn-primary hover:bg-accent-focus transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
