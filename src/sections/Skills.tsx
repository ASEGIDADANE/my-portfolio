import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  onSectionChange: (section: string) => void;
}

const skillCategories = [
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🦅' },
      { name: 'FastAPI', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    name: 'DevOps Tools',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'GitHub Actions', icon: '⚡' },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: '🎯' },
      { name: 'FlutterFlow', icon: '🚀' },
      { name: 'Dart', icon: '💙' },
      { name: 'Clean Architecture', icon: '🏗️' },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skillCategories[0]['skills'][0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const Skills = ({ onSectionChange }: SkillsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 