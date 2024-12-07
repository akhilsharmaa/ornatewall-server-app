import "../App.css"

function Footer() {
    return (
        <footer id="footer" className="bg-gray-200 w-full dark:bg-gray-900 py-8">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between items-start">
                    {/* Main Section */}
                    <div className="mb-6 md:mb-0">
                        <button className="bg-black text-white px-4 py-2 rounded-full">Book now</button>
                        <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">The Ornate Wall</h2>
                        <div className="mt-2 text-gray-500 dark:text-gray-400">
                            <p>Email: <a href="mailto:enquiry@ornatewall.com" className="hover:underline">enquiry@ornatewall.com</a></p>
                            <p>+91 900 759 1136 &nbsp; +91 907 366 6660</p>
                            <p>DGK144 DLF GALLERIA Action Area 1B</p>
                            <p>Newtown, Kolkata, West Bengal 700156</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Stay Connected</h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="sr-only">Phone</span>
                                {/* Phone Icon */}
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H16.5C17.33 2 18 2.67 18 3.5V16.5C18 17.33 17.33 18 16.5 18H3.5C2.67 18 2 17.33 2 16.5V3.5Z" /></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="sr-only">Instagram</span>
                                {/* Instagram Icon */}
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12.6A5.6 5.6 0 1110 4.4a5.6 5.6 0 010 11.2zM15.9 4.1a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z" /></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <span className="sr-only">Facebook</span>
                                {/* Facebook Icon */}
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M12 8h4V4h-4a4 4 0 00-4 4v4H4v4h4v4h4v-4h4v-4h-4V8z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h3>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Products</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Services</h3>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium mt-2 space-y-2">
                            <li>Interior Design</li>
                            <li>Project Management</li>
                            <li>Furniture Curation</li>
                            <li>Lighting Design</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">© 2024 All Rights Reserved</span>
                    <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Choose your country</span>
                        {/* Country selector placeholder */}
                        <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-5 mr-1" />
                            <span className="text-sm font-medium">IND</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
