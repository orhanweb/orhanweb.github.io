//src/components/Navbar/index.tsx
import { Link } from 'react-scroll';
import { IconType } from 'react-icons';
import { FaHome, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { FaCode, FaUserTie } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

const blurEffect = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const ulNavLinkEffect = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const liNavLinkEffect = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Type defination for LinkItem
interface LinkItem {
  id: string;
  label: string;
  Icon: IconType;
}

// Define navbar links
const navLinks: LinkItem[] = [
  { id: 'home', label: 'Home', Icon: FaHome },
  { id: 'projects', label: 'Projects', Icon: FaCode },
  { id: 'about', label: 'About', Icon: FaUserTie },
  { id: 'contact', label: 'Contact', Icon: FaPhoneAlt }
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Menü open/close func
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="fixed flex px-2 w-full justify-between items-center left-1/2 -translate-x-1/2 bg-gradient-to-t from-greenBlue-oceanBlue/30 to-greenBlue-midnightGreen/80 from-20% to-100%
      shadow-lg z-50 lg:mt-2 lg:w-3/4 lg:max-w-[1000px] lg:rounded-full backdrop-blur-md lg:hover:shadow-2xl lg:hover:scale-[102%]
      transition-all duration-300"
      >
        {/* The left side - Avatar and info */}
        <Link to="home" smooth={true} duration={500} className="flex items-center gap-4 cursor-pointer lg:hover:opacity-50 p-2 transition-all">
          <img src="/me.jpeg" alt="Orhan's Avatar" className="w-14 h-14 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-bold text-lg">Orhan</span>
            <span className="text-white-darkest text-sm">React TS Dev</span>
          </div>
        </Link>

        {/* Right side - Links */}
        {isMobile ? (
          <button onClick={toggleMenu} className="p-3 rounded-full hover:bg-green-emerald hover:text-greenBlue-brightCyan transition-all">
            {React.createElement(isMenuOpen ? FaTimes : FaBars, { size: 24 })}
          </button>
        ) : (
          <ul className="flex gap-3">
            {navLinks.map(link => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="flex p-3 rounded-full items-center gap-3 hover:bg-green-emerald hover:text-greenBlue-brightCyan transition-all cursor-pointer"
                  activeClass="bg-black/70 text-greenBlue-brightCyan"
                >
                  {React.createElement(link.Icon, { size: 20 })}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Menu Open - Blur Effect */}
      {isMobile && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={blurEffect}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md z-40"
              onClick={toggleMenu}
            >
              {/* Menu options */}
              {isMenuOpen && (
                <motion.ul variants={ulNavLinkEffect} className="flex flex-col gap-8 text-center">
                  {navLinks.map(link => (
                    <motion.li key={link.id} variants={liNavLinkEffect}>
                      <Link
                        to={link.id}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-78}
                        onClick={toggleMenu}
                        className="text-2xl hover:text-greenBlue-brightCyan transition-all cursor-pointer"
                        activeClass="text-greenBlue-brightCyan"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
