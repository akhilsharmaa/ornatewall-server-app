const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{
         backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/afa37862438731.5a901d7ae296e.jpg)' 
        }}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Heading and description */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
          Elevate Your Space.
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed px-2 md:px-4">
          Transforming Spaces into Timeless Experiences Through Innovative Design Solutions, Meticulous Attention to Detail, 
          and a Commitment to Crafting Interiors That Not Only Enhance Aesthetics but Also Improve Functionality.
        </p>
        
        {/* Responsive card with input and button */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 max-w-md w-full mx-4 lg:mx-auto transform transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-gray-500 font-semibold">+91</span>
            <input
              type="text"
              placeholder="Mobile Number*"
              className="flex-grow px-2 py-3 text-black outline-none placeholder-gray-500 bg-transparent rounded-lg"
            />
          </div>
          <button className="w-full py-3 bg-black text-white rounded-lg font-semibold transition-transform duration-200 hover:scale-105">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
