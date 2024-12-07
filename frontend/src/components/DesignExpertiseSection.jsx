import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 }); // Trigger animation when 20% of section is in view

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center bg-gray-50 py-12 px-4 lg:px-24 my-40"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl font-semibold text-gray-800 mb-4 text-center"
      >
        Design Expertise
      </motion.h2>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-2xl my-5 text-gray-600 lg:max-w-3xl max-w-2xl mb-10"
      >
        From cozy bedrooms to inviting living rooms and elegant dining areas, we breathe new life into every corner of your home, transforming the ordinary into the extraordinary.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[ 
          { src: Image2_1, alt: "Wardrobe Design", label: "Wardrobe Design" },
          { src: Image2_2, alt: "Master Bedroom Design", label: "Master Bedroom Design" },
          { src: Image2_3, alt: "Dining Area Design", label: "Dining Area Design" },
          { src: Image2_4, alt: "Kid’s Bedroom Design", label: "Kid’s Bedroom Design" },
          { src: Image2_5, alt: "Bathroom Design", label: "Bathroom Design" },
          { src: Image2_6, alt: "Pooja Room Design", label: "Pooja Room Design" },
          { src: Image2_7, alt: "Study Room Design", label: "Study Room Design" },
          { src: Image2_8, alt: "Living Room Design", label: "Living Room Design" },
          { src: Image2_9, alt: "Bedroom Design", label: "Bedroom Design" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DesignCard 
              imageSrc={item.src} 
              altText={item.alt} 
              label={item.label} 
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DesignExpertiseSection;
