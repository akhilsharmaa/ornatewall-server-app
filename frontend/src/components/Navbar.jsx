import { useState, useEffect } from 'react';
import "../App.css"; // Ensure this path is correct based on your folder structure


function SmallBanner() {
    const [isBannerVisible, setIsBannerVisible] = useState(false); // Initially not visible
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBannerVisible(true);
        }, 3000); // Delay of 3 seconds

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        isBannerVisible && (
            <div className="w-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 text-white py-2 px-6 text-sm font-semibold flex flex-col shadow-lg mx-1">
                <div className="flex justify-between items-center">
                    <span className="flex-1 text-lg">
                        Hello! Now We are at a new location.

                        <span
                            className="mt-2 text-blue-300 hover:text-blue-500 focus:outline-none transition-all duration-300 ease-in-out"
                            onClick={() => setIsExpanded((prev) => !prev)}
                        >
                            {isExpanded ? " view less" : " view more"}
                        </span>
                    </span>
                    <span
                        className="ml-4 text-xl text-white hover:text-red-400 focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-110"
                        onClick={() => setIsBannerVisible(false)}
                    >
                        ✖
                    </span>
                </div>

                {isExpanded && (
                    <div className="mt-2 text-sm ">
                        NKDA COMMUNITY MARKET SHOP NO 33 ACTION AREA 1, 
                        <br /> 
                        AA KOLKATA, A BLOCK, Kolkata, West Bengal 700156
                    </div>
                )}
            </div>
        )
    );
}


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav
            id="navbar"
            className="bg-transparent m-0 p-0 backdrop-blur-lg"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            // style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
        >


            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 px-6">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://st.hzcdn.com/fimgs/b163c1c90da85949_3994-w240-h240-b2-p0--.jpg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">The OrnateWall</span>
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
            <hr className="border-t border-white/30 backdrop-blur-sm" />
            <SmallBanner />

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
