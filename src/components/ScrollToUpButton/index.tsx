//src/components/ScrollToUp/index.tsx
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollButtonVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    },
    exit: {
      opacity: 0,
      y: -100,
      filter: 'blur(10px)'
    }
  };

  return (
    <div className="fixed bottom-5 right-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={scrollButtonVariants}
            onClick={scrollToUp}
            className="p-3 rounded-full bg-green-pine/50 backdrop-blur-sm hover:bg-green-pine/100 transition-colors"
            transition={{
              duration: 0.4,
              ease: 'easeInOut'
            }}
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToUp;
