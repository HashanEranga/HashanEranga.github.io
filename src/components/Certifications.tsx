'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Hackadev - Social Innovation Bootcamp",
    issuer: "Hackadev",
    year: "2023"
  },
  {
    name: "Fundamentals of TinyML",
    issuer: "edX Verified Certificate",
    year: "2022"
  },
  {
    name: "Artificial Intelligence in Embedded Systems",
    issuer: "edX",
    year: "2022"
  },
  {
    name: "Data Structures Specialization",
    issuer: "Coursera",
    year: "2021"
  },
  {
    name: "JSNation Live 2021 Participant",
    issuer: "JSNation",
    year: "2021"
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Certifications & Learning
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Continuous professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}