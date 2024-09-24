//src/pages/MainPage/Contact/index.tsx

import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { BiSolidCopy } from 'react-icons/bi';
import { ISocialIcon } from '../../../types/socialIcons';
import { icons } from '../../../data/contactData';

const copyIcons: Record<'default' | 'success' | 'error', IconType> = {
  default: BiSolidCopy,
  success: FaCheck,
  error: FaTimes
};

// Icons initial positions
const initialIcons: ISocialIcon[] = icons.map((icon, index) => {
  if (index === 0) return { ...icon, position: 'main' };
  if (index === 1) return { ...icon, position: 'next' };
  if (index === icons.length - 1) return { ...icon, position: 'prev' };
  return icon;
});

// Framer motion carousel variants func
const createVariants = (isLargeScreen: boolean) => ({
  enter: (direction: -1 | 1) => ({
    x: direction * (isLargeScreen ? 300 : 200),
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.1
    }
  }),
  main: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  prev: {
    x: isLargeScreen ? -200 : -110,
    opacity: 0.5,
    scale: 0.5
  },
  next: {
    x: isLargeScreen ? 200 : 110,
    opacity: 0.5,
    scale: 0.5
  },
  exit: (direction: -1 | 1) => ({
    zIndex: 0,
    x: -direction * (isLargeScreen ? 300 : 200),
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.1
    }
  })
});

const Contact = () => {
  const [iconList, setIconList] = useState<ISocialIcon[]>(initialIcons);
  const [direction, setDirection] = useState<-1 | 1 | null>(null);
  const [copyStatus, setCopyStatus] = useState<'default' | 'success' | 'error'>('default');

  // Screen width control (1024px and above for LG screens)
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const variants = createVariants(isLargeScreen);
  const mainIcon = iconList.find(icon => icon.position === 'main');

  useEffect(() => {
    setCopyStatus('default'); // Reset copyStatus when main icon changes
  }, [mainIcon?.id]);

  // Forward movement
  const handleNext = () => {
    setDirection(1);
    setIconList(prevList => {
      const mainIndex = prevList.findIndex(icon => icon.position === 'main'); // Find the index of the current main icon
      const nextIndex = (mainIndex + 1) % icons.length;
      const newNextIndex = (nextIndex + 1) % icons.length;

      return prevList.map((icon, index) => {
        if (index === mainIndex) return { ...icon, position: 'prev' }; // Current main becomes prev
        if (index === nextIndex) return { ...icon, position: 'main' }; // Current next becomes main
        if (index === newNextIndex) return { ...icon, position: 'next' }; // New next icon is determined
        return { ...icon, position: 'offline' }; // Other icons remain offline
      });
    });
  };

  // Moving Backwards
  const handlePrev = () => {
    setDirection(-1);
    setIconList(prevList => {
      const mainIndex = prevList.findIndex(icon => icon.position === 'main'); // Find the index of the current main icon
      const prevIndex = (mainIndex - 1 + icons.length) % icons.length;
      const newPrevIndex = (prevIndex - 1 + icons.length) % icons.length;

      return prevList.map((icon, index) => {
        if (index === mainIndex) return { ...icon, position: 'next' }; // Current main becomes next
        if (index === prevIndex) return { ...icon, position: 'main' }; // Current prev becomes main
        if (index === newPrevIndex) return { ...icon, position: 'prev' }; // New prev icon is determined
        return { ...icon, position: 'offline' }; // Other icons remain offline
      });
    });
  };

  // Copy URL to clipboard function
  const handleCopy = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopyStatus('success'); // Show a tick if copying is successful
        setTimeout(() => setCopyStatus('default'), 1000); // After 1 second the icon changes back to the copy icon
      })
      .catch(err => {
        console.error('Kopyalama işlemi başarısız oldu:', err);
        setCopyStatus('error');
        setTimeout(() => setCopyStatus('default'), 1000);
      });
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-78px)] flex flex-col items-center gap-10 justify-center overflow-hidden">
      <h1 className="w-full text-4xl md:text-5xl font-bold">Get in Touch</h1>

      <div id="carousel" className="flex justify-between items-center w-full gap-4">
        {/* Left arrow */}
        <motion.button onClick={handlePrev} className="z-[2]" whileTap={{ x: -10 }}>
          <FiChevronLeft size={40} />
        </motion.button>
        {/* Main Carousel Structure */}
        <div className="relative h-32 lg:h-48 flex items-center justify-center gap-4 ">
          <AnimatePresence custom={direction}>
            {iconList
              .filter(icon => icon.position !== 'offline')
              .map(icon => (
                <motion.div
                  key={icon.id}
                  custom={direction}
                  initial="enter"
                  animate={icon.position}
                  exit="exit"
                  variants={variants}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 12
                  }}
                  className={`absolute`}
                >
                  {React.createElement(icon.icon, { className: 'w-32 h-32 lg:w-48 lg:h-48' })}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <motion.button onClick={handleNext} className="z-[2]" whileTap={{ x: 10 }}>
          <FiChevronRight size={40} />
        </motion.button>
      </div>

      {/* Title and URL to the icon */}
      <h2 className="text-2xl font-semibold">{mainIcon?.title}</h2>
      <div className="flex gap-2">
        <div className="flex items-center justify-center rounded-full border bg-greenBlue-darkCyan/40 border-greenBlue-brightCyan">
          <FaLink className="text-black w-10 h-10 bg-greenBlue-brightCyan p-2 rounded-full" />
          <p className="max-w-[240px] lg:max-w-[500px] truncate pl-2 pr-4 text-sm lg:text-base">{mainIcon?.url.replace(/^(mailto:|tel:)/, '')}</p>
        </div>

        {/* Copy Icon */}
        <button
          onClick={() => handleCopy(mainIcon?.url || '')}
          className={`bg-greenBlue-brightCyan text-black rounded-full transition-all ${
            copyStatus === 'default' && 'hover:bg-greenBlue-darkCyan hover:text-white'
          }`}
          disabled={copyStatus !== 'default'}
        >
          {React.createElement(copyIcons[copyStatus], { className: 'w-10 h-10 p-2' })}
        </button>
      </div>

      {/* Open Link Anchor */}
      <a
        href={mainIcon?.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className=" inline-block px-4 py-2 bg-greenBlue-brightCyan text-black rounded-full hover:bg-greenBlue-darkCyan hover:text-white transition-all duration-300 ease-out"
      >
        Open Link
      </a>
    </section>
  );
};

export default Contact;
