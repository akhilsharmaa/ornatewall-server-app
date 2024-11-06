import DesignCard from "./DesignCard";
import Image2_1 from '../assets/home/image2_1.png';
import Image2_2 from '../assets/home/image2_2.png';
import Image2_3 from '../assets/home/image2_3.png';
import Image2_4 from '../assets/home/image2_4.png';
import Image2_5 from '../assets/home/image2_5.png';
import Image2_6 from '../assets/home/image2_6.png';
import Image2_7 from '../assets/home/image2_7.png';
import Image2_8 from '../assets/home/image2_8.png';
import Image2_9 from '../assets/home/image2_9.png';

const DesignExpertiseSection = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 py-12 px-4 lg:px-24 my-40">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
        Design Expertise
      </h2>
      <p className="text-center text-2xl my-5 text-gray-600 lg:max-w-3xl max-w-2xl mb-10">
        From cozy bedrooms to inviting living rooms and elegant dining areas, we breathe new life into every corner of your home, transforming the ordinary into the extraordinary.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
      <DesignCard 
          imageSrc={Image2_1} 
          altText="Wardrobe Design" 
          label="Wardrobe Design" 
        />
        <DesignCard 
          imageSrc={Image2_2} 
          altText="Master Bedroom Design" 
          label="Master Bedroom Design" 
        />
        <DesignCard 
          imageSrc={Image2_3} 
          altText="Dining Area Design" 
          label="Dining Area Design" 
        />
        <DesignCard 
          imageSrc={Image2_4} 
          altText="Kid’s Bedroom Design" 
          label="Kid’s Bedroom Design" 
        />
        <DesignCard 
          imageSrc={Image2_5} 
          altText="Bathroom Design" 
          label="Bathroom Design" 
        />
        <DesignCard 
          imageSrc={Image2_6} 
          altText="Pooja Room Design" 
          label="Pooja Room Design" 
        />
        <DesignCard 
          imageSrc={Image2_7} 
          altText="Study Room Design" 
          label="Study Room Design" 
        />
        <DesignCard 
          imageSrc={Image2_8} 
          altText="Living Room Design" 
          label="Living Room Design" 
        />
        <DesignCard 
          imageSrc={Image2_9} 
          altText="Bedroom Design" 
          label="Bedroom Design" 
        />
      </div>

    </section>
  );
};

export default DesignExpertiseSection;

