import { IProject } from '../types/projects';
import baseProject from '../assets/projectImages/react-ts-base-project.png';
import mySite from '../assets/projectImages/react-ts-my-site.png';

export const projects: IProject[] = [
  {
    id: 1,
    title: 'React TS Base Project',
    description: `
      This project is a starter template for building scalable and maintainable applications using React and TypeScript.
      It includes a variety of built-in features like responsive design, a notification system, lazy loading, custom loaders,
      a light/dark theme toggle, and error pages, making it an ideal foundation for complex projects.
    `,
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'React Router'],
    githubUrl: 'https://github.com/orhanweb/react-ts-base-project',
    liveDemoUrl: 'https://orhanweb.github.io/react-ts-base-project/',
    imageUrl: baseProject
  },
  {
    id: 2,
    title: 'My Site',
    description: `
      We are currently in a live inception. I don't even need to explain this project 😄. But let's give a quick summary anyway.
      This project was developed with modern web technologies and serves as both a display and a testbed.
      Built with React and TypeScript, styled with Tailwind CSS, and enhanced with smooth animations via Framer Motion.
      It also utilizes React Icons for iconography and React Scroll for smooth in-page navigation.
      Powered by Vite, the development experience is fast, and the performance is top-notch.
    `,
    technologies: ['React', 'TypeScript', 'React Scroll', 'Tailwind CSS', 'Framer Motion', 'React Icons', 'Vite'],
    githubUrl: 'https://github.com/orhanweb/react-ts-project-my-website',
    liveDemoUrl: 'https://username.github.io/my-site', // Replace the real url later
    imageUrl: mySite
  },
  {
    id: 3,
    title: 'Inventory Counting System',
    description: `
      This application was developed for a former employer as a comprehensive inventory management solution.
      Designed to facilitate accurate stock counts within warehouses, stores, or any organizational structure,
      it allows users to create and manage individual stock counts, quickly adding items via barcode scanning.
      Each stock count operates independently, enabling precise tracking, and can be exported to Excel for reporting purposes.
      The application is fully responsive and features modern, intuitive components. Global state management is handled with Redux,
      and RTK Query is employed for efficient RESTful API interactions. The app also supports both light and dark themes,
      and careful attention was given to clean code practices and organized file management.
      React Router is used for seamless route handling throughout the application.
    `,
    technologies: [
      'Dynamsoft Barcode Reader',
      'RTK Query',
      'Tailwind CSS',
      'Framer Motion',
      'Redux',
      'React Router',
      'Xlsx',
      'Skeleton Loading',
      'React',
      'TypeScript'
    ],
    githubUrl: 'https://github.com/orhanweb/react-ts-project-stock-counting'
  },
  {
    id: 4,
    title: 'Space Ship Titanic AI Model',
    description: `
      This project was a great opportunity for me to deepen my knowledge in machine learning and explore new techniques.
      I applied these techniques to the Kaggle Titanic dataset with the goal of predicting passenger survival using two different models:
      a Neural Network and a Support Vector Classifier (SVC).

      Throughout the process, I focused on data preprocessing, which included handling missing values, feature engineering, and scaling.
      Once the dataset was prepared, I trained and evaluated both models to compare their effectiveness. The Neural Network model
      challenged me to learn more about deep learning concepts, while the SVC model gave me a chance to refine my understanding
      of classical machine learning methods.

      Overall, this project allowed me to not only build functional models but also to expand my knowledge in AI and apply new
      techniques that I hadn't worked with before. It was a rewarding learning experience that highlighted the balance between
      complexity and simplicity in machine learning models.
    `,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Neural Networks', 'SVC'],
    githubUrl: 'https://github.com/orhanweb/space_ship_titanic_ai_model'
  }
];
