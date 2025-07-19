import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface TestimonialsProps {
  onSectionChange: (section: string) => void;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I had the pleasure of working with Asegid as part of my development team, where he served as a Flutter mobile developer. From day one, Asegid demonstrated exceptional technical skills, a proactive attitude, and a strong sense of ownership. He consistently delivered clean, efficient, and well-structured code—often ahead of schedule—and was quick to grasp complex requirements. Beyond his technical capabilities, Asegid was a collaborative team player who brought positive energy to every meeting and took feedback with humility and a growth mindset. I strongly recommend him for any future opportunity",
    name: "Yordanos W.",
    role: "Project Manager",
    company: "Eskalate",
    image: "/images/yordanos.jpeg",
  },
  {
    quote: "The attention to detail and clean code practices demonstrated in our project were impressive. They consistently delivered high-quality work and were a great team player.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "InnovateX",
    image: "/testimonial2.jpg",
  },
  {
    quote: "Their ability to solve complex problems and implement efficient solutions was invaluable to our project. I would highly recommend working with them.",
    name: "Mike Johnson",
    role: "Lead Developer",
    company: "Digital Solutions",
    image: "/testimonial3.jpg",
  },
];

const Testimonials = ({ onSectionChange }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Testimonials
          </h2>
          <p className="text-gray-300">
            What people say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-gray-300 mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div>
                <p className="text-white font-bold">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 