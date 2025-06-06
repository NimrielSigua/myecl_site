import React from 'react';
import { FaMoneyBillWave, FaClock, FaClipboardList, FaChartLine, FaCog, FaBell } from 'react-icons/fa';

const LoanerDashboard = () => {
    return (
        <>
            <div  className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">NS</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className="min-h-screen p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Loan Application Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaMoneyBillWave className="text-4xl text-blue-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Total Loans</h2>
                            <p className="text-xl text-gray-500">Active loans: <span className="font-bold text-blue-600">150</span></p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaClock className="text-4xl text-yellow-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Pending Applications</h2>
                            <p className="text-xl text-gray-500">Applications pending approval: <span className="font-bold text-blue-600">25</span></p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaClipboardList className="text-4xl text-green-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Recent Applications</h2>
                            <p className="text-xl text-gray-500">Details about recent applications will go here.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaChartLine className="text-4xl text-purple-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Loan Statistics</h2>
                            <p className="text-xl text-gray-500">Average loan amount: <span className="font-bold text-blue-600">$10,000</span></p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaCog className="text-4xl text-gray-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Settings</h2>
                            <p className="text-xl text-gray-500">Links to loan settings will go here.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center">
                        <FaBell className="text-4xl text-red-600 mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Notifications</h2>
                            <p className="text-xl text-gray-500">Check for any important updates or alerts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoanerDashboard;
