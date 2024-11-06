// ContactForm.js

import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white   bg-opacity-95 rounded-lg shadow-xl p-8 w-full text-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-center">Talk to a designer</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border dark:bg-white border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
        />
        <input
          type="email"
          placeholder="email ID"
          className="w-full border dark:bg-white border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full border dark:bg-white border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
        />
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="whatsapp" className="h-4 w-4 text-black" />
          <label htmlFor="whatsapp" className="text-sm text-gray-700">Send me updates on WhatsApp</label>
        </div>
        <textarea
          placeholder="Any note or message*"
          className="w-full border dark:bg-white border-gray-300 rounded-md px-4 py-2 h-24 text-sm focus:outline-none focus:border-gray-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black  text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          GET FREE QUOTE
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to the privacy policy & terms and conditions.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
