
import BedroomImage1 from '../assets/home/image3_1.png'; // Replace with actual image paths
import BedroomImage2 from '../assets/home/image3_2.png';
import BedroomImage3 from '../assets/home/image3_3.png';
import BedroomCard from './BedroomCard';


const LuxuriousBedroomsSection = () => {
    return (
      <section className="flex flex-col items-center bg-gray-50 py-16 px-4 lg:px-24">
        {/* Section Title and Subtitle */}
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
          Luxurious Bedrooms
        </h2>
        <p className="text-center text-xl text-gray-600 lg:max-w-3xl max-w-2xl mb-10">
          Our bedroom designs are crafted to be serene sanctuaries, where you can unwind and recharge in the utmost comfort and style.
        </p>
        
        {/* Bedroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BedroomCard 
            imageSrc={BedroomImage1}
            title="Harmonious Living Spaces"
            description="In our living room designs, we seamlessly blend form and function, creating spaces that are both visually captivating and exceptionally livable."
          />
          
          <BedroomCard 
            imageSrc={BedroomImage2}
            title="Elevated Sleeping Quarters"
            description="Our bedroom designs prioritize both beauty and comfort, ensuring that your personal retreat is a haven of tranquility and inspiration."
          />
          
          <BedroomCard 
            imageSrc={BedroomImage3}
            title="Elevated Sleeping Quarters"
            description="Our bedroom designs prioritize both beauty and comfort, ensuring that your personal retreat is a haven of tranquility and inspiration."
          />
        </div>
      </section>
    );
  };
  
  export default LuxuriousBedroomsSection;