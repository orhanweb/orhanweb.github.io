//src/types/project.d.ts

export interface IProject {
  id: number; // A unique ID for each project
  title: string; // Project name
  description: string; // Short description
  technologies: string[]; // Technologies used
  githubUrl: string; // GitHub link
  liveDemoUrl?: string; // Optional: Live demo link
  imageUrl?: string; // Optional: Project image
}
