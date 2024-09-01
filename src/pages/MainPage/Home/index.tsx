//src/pages/MainPage/Home/index.tsx

import Marquee from 'react-marquee-slider';
import TextGenerateEffect from '../../../components/TextGenerateEffect';
import './index.css';
import { motion } from 'framer-motion';

const parentEffect = {
  visible: {
    transition: {
      delayChildren: 0.5, // 0.5 second delay
      staggerChildren: 0.4, // Each child starts the animation at 0.3 second intervals
    },
  },
};

const childEffect = {
  hidden: {
    opacity: 0,
    scale: 1.2, // Initially 120% size
    filter: 'blur(10px)', // Blurry at first
    transformOrigin: 'center', // Growth occurs from the middle
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const Home = () => {
  const description: string =
    'Hi! My name is Orhan. I am a passionate React TypeScript developer, specializing in building highly responsive, modern web applications. My focus is on creating seamless user experiences through clean, scalable, and maintainable code.';
  const technologies: string[] = ['React', 'TypeScript', 'Tailwind', 'Redux', 'React-Router', 'Framer Motion'];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b pt-20 py-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Main content section */}
      <motion.div
        variants={parentEffect}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-8 p-4 w-full md:max-w-[600px]"
      >
        {/* Main Header with Photo and Divider */}
        <motion.div id="photo-title" variants={childEffect} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img src="/me.jpeg" alt="Orhan’s portrait photo" className="w-64 h-64 rounded-full object-cover" />
          <div className="hidden md:block h-48 w-1 rounded-full bg-white"></div>
          <h1 className="text-4xl font-bold text-center md:text-start bg-gradient-to-br from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
            React TS <br />
            Developer
          </h1>
        </motion.div>

        {/* Short Description */}
        <motion.div id="short-description" variants={childEffect}>
          <TextGenerateEffect words={description} />
        </motion.div>

        {/* Skills */}
        <motion.div id="skills" variants={childEffect} className="z-[2]">
          <h2 className="text-2xl font-semibold mb-4">What i use?</h2>
          <div className="fade-effect">
            <Marquee direction="rtl" velocity={10} scatterRandomly={false} resetAfterTries={1} onInit={() => {}} onFinish={() => {}}>
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-greenBlue-deepTeal/50 text-greenBlue-brightCyan px-4 py-2 font-semibold rounded-lg shadow-lg whitespace-nowrap ml-4"
                >
                  {tech}
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        <motion.div id="download-button" variants={childEffect} className="flex justify-center mt-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="button-wrapper"
          >
            <a href="/cv_tr.pdf" download="Orhan_CV.pdf" className="px-5 py-3 flex justify-center items-center bg-black font-bold z-[2] rounded-lg">
              Download My CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
