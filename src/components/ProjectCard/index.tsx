//src/components/ProjectCard/index.tsx
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './index.css';
import { IProject } from '../../types/projects';

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  const [showMore, setShowMore] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const truncateDescription = (description: string): string => {
    if (description.length <= 150) {
      return description;
    }
    return `${description.substring(0, 150)}...`;
  };

  return (
    <div className="project-card bg-black-light px-4 py-6 rounded-lg overflow-hidden w-full sm:max-w-xs flex flex-col h-fit justify-between gap-4 ">
      {/* Header content of card */}
      <div id="heder-content-card" className="flex flex-col gap-4">
        {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-contain rounded-lg" />}
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-white-darkest max-h-56 overflow-y-auto text-sm">
          {showMore ? project.description : truncateDescription(project.description)}
          {project.description.length > 150 && (
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="text-greenBlue-teal hover:underline ml-1"
            >
              {showMore ? 'Show Less' : 'More'}
            </button>
          )}
        </p>
      </div>

      {/* Footer content of card */}
      <div id="footer-content-card" className="flex flex-col gap-4">
        {/* Tags */}
        <div>
          <h3 className="font-semibold text-white-darker">Technologies:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, showAllTech ? project.technologies.length : 5).map((tech, index) => (
              <li key={index} className="bg-green-emerald text-greenBlue-brightCyan px-2 py-1 rounded-md text-sm">
                {tech}
              </li>
            ))}
            {project.technologies.length > 5 && (
              <button
                onClick={() => setShowAllTech(!showAllTech)}
                className="bg-greenBlue-brightCyan text-green-emerald px-2 py-1 rounded-md lg:hover:opacity-50 text-sm transition-all"
              >
                {showAllTech ? 'Hide' : `+${project.technologies.length - 5} More`}
              </button>
            )}
          </ul>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover-effect">
            <FaGithub className="mr-2" /> GitHub
          </a>
          {project.liveDemoUrl && (
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center link-hover-effect">
              <HiOutlineExternalLink className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
