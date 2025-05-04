import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface ProjectsProps {
  onSectionChange: (section: string) => void;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A cross-platform e-commerce application built with Flutter and Firebase, featuring real-time updates, secure payments, and user authentication.',
    image: '/project1.jpg',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/ecommerce-app',
    demoLink: 'https://ecommerce-app-demo.com',
  },
  {
    title: 'Microservices Architecture',
    description: 'A scalable backend system using NestJS microservices, implementing event-driven architecture and containerization with Docker.',
    image: '/project2.jpg',
    technologies: ['NestJS', 'Docker', 'PostgreSQL', 'Redis'],
    githubLink: 'https://github.com/yourusername/microservices',
    demoLink: 'https://microservices-demo.com',
  },
  {
    title: 'Task Management API',
    description: 'A RESTful API for task management built with FastAPI, featuring JWT authentication, role-based access control, and automated testing.',
    image: '/project3.jpg',
    technologies: ['FastAPI', 'PostgreSQL', 'JWT', 'Pytest'],
    githubLink: 'https://github.com/yourusername/task-api',
    demoLink: 'https://task-api-demo.com',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          >
            <CodeBracketIcon className="icon-sm mr-2" />
            See Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="icon-sm mr-2" />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ onSectionChange }: ProjectsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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