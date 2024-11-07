import Image1 from '../assets/home/image1.png';
import Image2 from '../assets/home/image2.png';


const AboutSection = () => {
  return (
    <section className="flex my-20 flex-col items-center bg-gray-50 py-12 px-4 lg:px-24">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
        About Our Approach
      </h2>
      <p className="text-center text-1xl my-5 text-gray-600 lg:max-w-3xl max-w-2xl  mb-10">
        At the core of our design philosophy lies a deep understanding of how the right balance of light, space, and thoughtful accents can create an ambiance that soothes the senses and uplifts the spirit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={Image2}
            alt="Interior Design 1"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <img
            src={Image1}
            alt="Interior Design 2"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;