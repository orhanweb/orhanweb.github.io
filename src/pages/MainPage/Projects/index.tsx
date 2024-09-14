//src/pages/MainPage/Projects/index.tsx

import ProjectCard from '../../../components/ProjectCard';
import { projects } from '../../../data/projectsData';
import { motion } from 'framer-motion';
import FancyButton from '../../../components/FancyButton';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    filter: 'blur(15px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// Default animation props to be reused
const defaultAnimationProps = {
  variants: cardVariants,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.5 }
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-center">
      <div className="p-5 max-w-[1000px] mb-20">
        <h1 className="text-5xl font-bold mb-10">My Projects</h1>

        {/* Project Cards Here */}
        <div id="project-card-list" className="columns-1 sm:columns-2 lg:columns-3 gap-8 ">
          {projects.map(project => (
            <motion.div key={project.id} layout {...defaultAnimationProps} className="mb-8 break-inside-avoid">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub Button at the End of the List */}
        <div className="mt-4 flex justify-end">
          <motion.div {...defaultAnimationProps} className="w-full sm:w-fit">
            <a href="https://github.com/orhanweb" target="_blank" rel="noopener noreferrer">
              <FancyButton text="See more my projects" className="w-full sm:w-96" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
