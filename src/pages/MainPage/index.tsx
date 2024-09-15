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
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1000px] px-5 flex flex-col gap-20">
          <Home />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
