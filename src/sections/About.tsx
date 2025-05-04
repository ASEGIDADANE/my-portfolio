import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface AboutProps {
  onSectionChange: (section: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = ({ onSectionChange }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-300">
            Get to know more about me and my journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300">
              I'm a skilled Mobile App and Backend Developer with strong problem-solving abilities and a solid background in data structures and algorithms. At A2SV, I work on building scalable, high-quality applications while mastering both Flutter development and backend engineering.
            </p>
            <p className="text-gray-300">
              I'm passionate about clean code, efficient systems, and using tech to solve real-world problems. My experience spans across various technologies and frameworks, allowing me to create robust and maintainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onSectionChange('projects')}
                className="btn-primary"
              >
                View My Projects
              </button>
              <button
                className="btn-outline flex items-center justify-center gap-2"
              >
                <ArrowDownTrayIcon className="icon-md" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 