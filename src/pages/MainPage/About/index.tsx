// src/pages/MainPage/About/index.tsx
import { motion } from 'framer-motion';
import { aboutMeText } from '../../../data/aboutData';

const paragraphAnimation = {
  hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const About = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-80px)] pt-10 pb-20 flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">About Me ✨</h1>

      <div className="font-medium md:font-semibold text-gray-300 md:text-lg text-justify space-y-4">
        {aboutMeText.map((paragraph, index) => (
          <motion.p
            key={index}
            layout
            initial="hidden"
            whileInView="visible" // It will be visible when you enter the viewport
            viewport={{ once: true, amount: 0.5 }} // It will only work once, when 50% is visible
            variants={paragraphAnimation}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
