import { useState } from 'react';
import "../../src/App.css"; // Ensure this path is correct based on your folder structure

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav
            id="navbar"
            className="bg-white m-0 p-0"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            // style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        >
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://st.hzcdn.com/fimgs/b163c1c90da85949_3994-w240-h240-b2-p0--.jpg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">The Ornate Wall</span>
                </a>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className={`items-center justify-between font-medium ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button onClick={toggleDropdown} id="mega-menu-full-dropdown-button" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Company 
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {isDropdownOpen && (
                <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-white bg-opacity-90 backdrop-blur">
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Online Stores</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Segmentation</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Marketing CRM</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Online Stores</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Segmentation</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                    <div className="font-semibold">Marketing CRM</div>
                                    <span className="text-sm text-gray-500">Connect with third-party tools that you’re already using.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}
