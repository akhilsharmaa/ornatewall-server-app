// import videosample from '../assets/home/video.mp4';
// import videosample2 from '../assets/home/video2.mp4';
// import videosample3 from '../assets/home/video3.mp4';
import videosample4 from '../assets/home/video4.mp4';
import ContactFormHero from './ContactFormHero';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={videosample4}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-8xl md:text-5xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Elevate Your
            <span className='text-red-400'> Space</span>.
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed px-2 md:px-4">
            Transforming Spaces into Timeless Experiences Through Innovative Design Solutions
          </p>

          <div className='lg:w-2/3 w-full'>
            <ContactFormHero />
          </div>
        </div>
        
        <div className='w-1/3'>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
