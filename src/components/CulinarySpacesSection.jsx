// CulinarySpacesSection.js
import CulinaryImage from '../assets/home/image4.png'; // Replace with the actual path to your image

const CulinarySpacesSection = () => {
  return (
    <section className="m-20 flex flex-col md:flex-row items-center bg-gray-100 py-16 px-4 lg:px-24">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 relative">
        <img
          src={CulinaryImage}
          alt="Curated Culinary Space"
          className="rounded-lg shadow-lg object-cover w-full h-full border-4 border-gray-300"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Curated Culinary Spaces
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Our dining room designs strike a perfect balance between form and function, creating spaces that are not only visually stunning but also optimized for effortless entertaining and gourmet meal preparation.
        </p>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          By seamlessly integrating high-end appliances, custom cabinetry, and carefully selected furnishings, we craft dining areas that are both a feast for the senses and a hub for cherished moments with family and friends.
        </p>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Our attention to detail and commitment to quality ensure that every aspect of your dining experience, from the layout to the lighting and decor, is meticulously designed to elevate your culinary pursuits and make your home the ultimate destination for gracious hospitality.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
          Explore
        </button>
      </div>
    </section>
  );
};

export default CulinarySpacesSection;
