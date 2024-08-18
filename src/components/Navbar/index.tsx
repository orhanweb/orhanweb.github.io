//src/components/Navbar/index.tsx
import { Link } from 'react-scroll';
import { IconType } from 'react-icons';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';

// LinkItem için tip tanımı
interface LinkItem {
  id: string;
  label: string;
  Icon: IconType;
}

// Navbar linklerini tanımlıyoruz
const navLinks: LinkItem[] = [
  { id: 'home', label: 'Home', Icon: FaHome },
  { id: 'projects', label: 'Projects', Icon: FaProjectDiagram },
  { id: 'about', label: 'About', Icon: FaInfoCircle },
  { id: 'contact', label: 'Contact', Icon: FaPhoneAlt },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <nav
      className="fixed flex px-2 w-full justify-between items-center  left-1/2 -translate-x-1/2 bg-gradient-to-t from-greenBlue-oceanBlue/30  to-greenBlue-midnightGreen/80 from-20% to-100%
      shadow-lg z-10 lg:mt-2 lg:w-3/4 lg:max-w-[1000px] lg:rounded-full backdrop-blur-md lg:hover:shadow-2xl lg:hover:scale-[102%]
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
        <button className="p-3 rounded-full hover:bg-green-emerald hover:text-greenBlue-brightCyan transition-all">
          {React.createElement(FaBars, { size: 24 })}
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
                offset={-78}
                className="flex p-3 rounded-full items-center gap-3 hover:bg-green-emerald  transition-all cursor-pointer"
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
  );
};

export default Navbar;
