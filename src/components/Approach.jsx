import Image1 from '../assets/home/image1.png';
import Image2 from '../assets/home/image2.png';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="flex my-20 flex-col items-center bg-gray-50 py-12 px-4 lg:px-24">
      <motion.h2
        className="text-5xl font-semibold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Our Approach
      </motion.h2>

      <motion.p
        className="text-center text-1xl my-5 text-gray-600 lg:max-w-3xl max-w-2xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        At the core of our design philosophy lies a deep understanding of how the right balance of light, space, and thoughtful accents can create an ambiance that soothes the senses and uplifts the spirit.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.6,
            type: "spring",
            damping: 10,
          }}
        >
          <img
            src={Image2}
            alt="Interior Design 1"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.8,
            type: "spring",
            damping: 10,
          }}
        >
          <img
            src={Image1}
            alt="Interior Design 2"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
