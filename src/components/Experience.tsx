'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Cloud Solutions International",
    period: "August 2025 - Present",
    location: "Colombo, Sri Lanka",
    description: [
      "Leading enterprise application development using .NET and Angular",
      "Designing and implementing scalable microservices architecture",
      "Mentoring junior developers and conducting code reviews",
      "Collaborating with cross-functional teams on product delivery"
    ],
    technologies: [".NET", "Angular", "Azure", "Docker", "Kubernetes"]
  },
  {
    title: "Software Engineer",
    company: "Cloud Solutions International",
    period: "February 2023 - October 2025",
    location: "Colombo, Sri Lanka",
    description: [
      "Developed enterprise-level applications using .NET and Angular",
      "Implemented cloud-native solutions using Azure services",
      "Optimized database performance and scalability",
      "Led migration of legacy systems to modern tech stack"
    ],
    technologies: [".NET", "Angular", "SQL Server", "Azure"]
  },
  {
    title: "Associate Software Engineer",
    company: "Future Labs",
    period: "August 2022 - February 2023",
    location: "Colombo, Sri Lanka",
    description: [
      "Specialized in machine learning solution development",
      "Implemented data analytics platform features",
      "Built responsive web applications",
      "Contributed to product engineering services"
    ],
    technologies: ["Machine Learning", "Data Analytics", "Web Development"]
  },
  {
    title: "Casual Instructor",
    company: "University of Peradeniya",
    period: "May 2021 - October 2022",
    location: "Sri Lanka",
    description: [
      "Taught computer engineering concepts to undergraduates",
      "Developed curriculum materials and assignments",
      "Mentored students in software development projects",
      "Conducted laboratory sessions and practical workshops"
    ],
    technologies: ["Teaching", "Mentoring", "Curriculum Development"]
  }
];

export default function Experience() {
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
              Professional Experience
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Building enterprise solutions and leading technical initiatives across various organizations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Building className="text-white" size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
                        <h4 className="text-xl text-blue-400 font-semibold">{experience.company}</h4>
                      </div>
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                        <div className="flex items-center text-slate-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center text-slate-400">
                          <MapPin size={16} className="mr-2" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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