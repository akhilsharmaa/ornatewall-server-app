import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BedroomImage1 from '../assets/home/image3_1.png';
import BedroomImage2 from '../assets/home/image3_2.png';
import BedroomImage3 from '../assets/home/image3_3.png';
import BedroomCard from './BedroomCard';

const LuxuriousBedroomsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-20 px-4 lg:px-24 overflow-hidden"
      style={{ backgroundAttachment: "fixed" }}
    >
      {/* Section Title and Subtitle with subtle animation */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-6xl font-extrabold text-gray-800 mb-4 text-center"
      >
        Luxurious Bedrooms
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center text-xl text-gray-600 lg:max-w-3xl max-w-2xl mb-12"
      >
        Our bedroom designs are crafted to be serene sanctuaries, where you can unwind and recharge in the utmost comfort and style.
      </motion.p>

      {/* Bedroom Cards with Enhanced Hover and Scroll Effects */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
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
          { src: BedroomImage1, title: "Harmonious Living Spaces", description: "In our living room designs, we seamlessly blend form and function, creating spaces that are both visually captivating and exceptionally livable." },
          { src: BedroomImage2, title: "Elevated Sleeping Quarters", description: "Our bedroom designs prioritize both beauty and comfort, ensuring that your personal retreat is a haven of tranquility and inspiration." },
          { src: BedroomImage3, title: "Sophisticated Comfort", description: "Every detail is carefully considered to craft a space that feels as good as it looks, offering you a luxurious escape in your own home." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
            animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative shadow-lg overflow-hidden rounded-lg transition-transform duration-500 transform hover:shadow-2xl"
          >
            <motion.img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-64 md:h-80 transition-transform duration-500"
              style={{ transformOrigin: "center center" }}
              whileHover={{ scale: 1.1 }}
            />

            {/* Overlay and Content */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-white px-4 py-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LuxuriousBedroomsSection;
