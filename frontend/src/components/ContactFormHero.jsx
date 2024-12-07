// ContactForm.js

import React from 'react';

const ContactFormHero = () => {
  return (

    <form>
      <div className="flex">
        <div className="relative w-full">
          <input type="search" id="search-dropdown" className="pl-6 rounded-lg block p-2.5 w-full focus:none z-20 text-lg text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300  focus:border-gray-500"
              placeholder="Enter Phone Number" required />
          <button type="submit" className="absolute top-0 end-0 p-2.5 px-8 h-full text-lg font-medium text-white bg-red-400 rounded-e-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Connect
          </button>
        </div>
      </div>
    </form>

  );
};

export default ContactFormHero;
