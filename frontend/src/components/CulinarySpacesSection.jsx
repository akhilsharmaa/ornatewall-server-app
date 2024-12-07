import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CulinaryImage from '../assets/home/image4.png'; // Replace with the actual path to your image

const CulinarySpacesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="m-20 flex flex-col md:flex-row items-center bg-gray-100 py-16 px-4 lg:px-24 relative overflow-hidden"
    >
      {/* Left Image Section with Parallax and Hover Effects */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 relative"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={CulinaryImage}
          alt="Curated Culinary Space"
          className="rounded-lg shadow-lg object-cover w-full h-full border-4 border-gray-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl font-semibold text-gray-800 mb-4"
        >
          Curated Culinary Spaces
        </motion.h2>

        <motion.p
          className="text-sm text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our dining room designs strike a perfect balance between form and function, creating spaces that are not only visually stunning but also optimized for effortless entertaining and gourmet meal preparation.
        </motion.p>

        <motion.p
          className="text-sm text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          By seamlessly integrating high-end appliances, custom cabinetry, and carefully selected furnishings, we craft dining areas that are both a feast for the senses and a hub for cherished moments with family and friends.
        </motion.p>

        <motion.p
          className="text-sm text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Our attention to detail and commitment to quality ensure that every aspect of your dining experience, from the layout to the lighting and decor, is meticulously designed to elevate your culinary pursuits and make your home the ultimate destination for gracious hospitality.
        </motion.p>

        <motion.button
          className="bg-black text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Explore
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CulinarySpacesSection;
