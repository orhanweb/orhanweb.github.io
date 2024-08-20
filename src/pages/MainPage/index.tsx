//src/pages/MainPage/index.tsx
import Navbar from '../../components/Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div id="main" className="bg-black text-white">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default MainPage;
