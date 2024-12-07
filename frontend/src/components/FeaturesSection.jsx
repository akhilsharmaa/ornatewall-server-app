// FeaturesSection.js

import React from 'react';

import WarrantyIcon from '../assets/home/image4_1.png'; // Replace with actual paths to your icons
import DeliveryIcon from '../assets/home/image4_2.png';
import DesignExpertsIcon from '../assets/home/image4_3.png';
import ServiceIcon from '../assets/home/image4_4.png';

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <img src={icon} alt={title} className="w-20 h-202 mb-2" /> {/* Icon size */}
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Main FeaturesSection Component
const FeaturesSection = () => {
  return (
    <section className="flex flex-col m-20 items-center bg-gray-50 py-12 px-4 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full md:w-auto mb-8">
        <FeatureCard 
          icon={WarrantyIcon} 
          title="Flat 10 year warranty" 
          description="Choose interiors designed with superior quality material, leaving no room for defects."
        />
        <FeatureCard 
          icon={DeliveryIcon} 
          title="44-day delivery" 
          description="Choose interiors designed with superior quality material, leaving no room for defects."
        />
        <FeatureCard 
          icon={DesignExpertsIcon} 
          title="400+ design experts" 
          description="Choose interiors designed with superior quality material, leaving no room for defects."
        />
        <FeatureCard 
          icon={ServiceIcon} 
          title="Post-installation service" 
          description="Choose interiors designed with superior quality material, leaving no room for defects."
        />
      </div>

      <button className="bg-black  mt-14 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition duration-300">
        BOOK FREE DESIGN SESSION
      </button>
    </section>
  );
};

export default FeaturesSection;
