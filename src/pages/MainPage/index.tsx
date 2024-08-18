//src/pages/MainPage/index.tsx
import Navbar from '../../components/Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default MainPage;
