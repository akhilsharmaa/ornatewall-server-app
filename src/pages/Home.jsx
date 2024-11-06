import '../App.css';
import AboutSection from '../components/Approach';
import BackgroundSection from '../components/BackgroundSection';
import ContactForm from '../components/ContactForm';
import CulinarySpacesSection from '../components/CulinarySpacesSection';
import DesignExpertiseSection from '../components/DesignExpertiseSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import LuxuriousBedroomsSection from '../components/LuxuriousBedroomsSection';
import { Navbar } from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <DesignExpertiseSection/>
      <CulinarySpacesSection/>
      <LuxuriousBedroomsSection/>

      <BackgroundSection title="Let's get started with your dream interiors">
      <div className="relative z-10 mt-8 md:mt-0 md:ml-auto">
        <ContactForm />
        </div>
      </BackgroundSection>

      <FeaturesSection/>

      <Footer />
    </div>
  );
}

export default Home;
