//src/data/contactData.ts
import { ISocialIcon } from '../types/socialIcons';
import { FaEnvelope, FaGithub, FaInstagram, FaKaggle, FaLinkedin, FaMedium, FaPhone, FaXTwitter } from 'react-icons/fa6';

export const icons: ISocialIcon[] = [
  { id: 1, icon: FaGithub, title: 'GitHub', url: 'https://github.com/orhanweb', position: 'offline' },
  { id: 2, icon: FaLinkedin, title: 'LinkedIn', url: 'https://www.linkedin.com/in/orhan-kahraman/', position: 'offline' },
  { id: 3, icon: FaPhone, title: 'Phone', url: 'tel:+905435218694', position: 'offline' },
  { id: 4, icon: FaInstagram, title: 'Instagram', url: 'https://www.instagram.com/orhanweb/', position: 'offline' },
  { id: 5, icon: FaXTwitter, title: 'X', url: 'https://x.com/Orhaniix', position: 'offline' },
  { id: 6, icon: FaMedium, title: 'Medium', url: 'https://medium.com/@herorhan999', position: 'offline' },
  { id: 7, icon: FaKaggle, title: 'Kaggle', url: 'https://www.kaggle.com/orhanweb', position: 'offline' },
  { id: 8, icon: FaEnvelope, title: 'Email', url: 'mailto:herorhan999@gmail.com', position: 'offline' }
];
