// GetStartedSection.js

import React from 'react';
import BackgroundSection from './BackgroundSection';
import ContactForm from './ContactForm';

const GetStartedSection = () => {
  return (
    <BackgroundSection title="Let's get started with your dream interiors">
      <div className="flex justify-center w-full mt-8 md:mt-0 md:justify-end px-4 md:px-16">
        <ContactForm />
      </div>
    </BackgroundSection>
  );
};

export default GetStartedSection;
