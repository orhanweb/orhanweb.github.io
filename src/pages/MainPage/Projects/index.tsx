//src/pages/MainPage/Projects/index.tsx

import ProjectCard from '../../../components/ProjectCard';
import { projects } from '../../../data/projects';
import { motion } from 'framer-motion';

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

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex justify-center">
      <div className="p-5 max-w-[1000px]">
        <h1 className="text-5xl font-bold mb-10">My Projects</h1>
        <div id="card-list" className="columns-1 sm:columns-2 lg:columns-3 gap-8 ">
          {/* Project Cards Here */}
          {projects.map(project => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-8 break-inside-avoid"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
