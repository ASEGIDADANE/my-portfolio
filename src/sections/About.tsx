import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface AboutProps {
  onSectionChange: (section: string) => void;
}

const About = ({ onSectionChange }: AboutProps) => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      onSectionChange('projects');
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur opacity-20"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 space-y-6"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
              Crafting Scalable Apps with Passion for Web & Mobile Innovation
            </h3>
            <p className="mt-4 text-md text-gray-700 dark:text-gray-300 max-w-3xl">
              I'm a dedicated Mobile App and Backend Developer with a strong foundation in data structures and algorithms, honed through my experience at <span className="font-semibold">A2SV</span>. I specialize in building efficient, scalable, and user-centric applications using <span className="font-semibold">Flutter, Node.js, NestJS, and modern DevOps practices</span>. With a deep passion for clean architecture and real-world problem-solving, I strive to create technology that's not just functional — but impactful.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleProjectsClick}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                View My Projects
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 