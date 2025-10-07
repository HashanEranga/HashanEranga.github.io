'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Calendar } from 'lucide-react';

const leadership = [
  {
    title: "SLSAC Technical Activities Sub-Committee Project Lead",
    organization: "IEEE Sri Lanka Section",
    period: "March 2022 - February 2023",
    description: "Led technical initiatives for IEEE Sri Lanka Student Activities Committee, organizing educational programs and coordinating with industry professionals for knowledge sharing.",
    impact: "Organized 15+ technical workshops and facilitated industry-academia collaboration"
  },
  {
    title: "Publicity Team Leader",
    organization: "IEEE Techverse Sri Lanka",
    period: "April 2021 - March 2022",
    description: "Managed community outreach and engagement programs, establishing partnerships with educational institutions and increasing student participation.",
    impact: "Increased student participation by 200% and mentored 200+ students in technology career paths"
  }
];

export default function Leadership() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Leadership & Community
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empowering the next generation through IEEE volunteer work and technical leadership
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-900/50 rounded-lg p-8 border border-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
                      <h4 className="text-xl text-blue-400 font-semibold">{role.organization}</h4>
                      <div className="flex items-center text-slate-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{role.period}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{role.description}</p>
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                      <div className="flex items-start space-x-2">
                        <Award className="text-green-400 mt-1 flex-shrink-0" size={20} />
                        <p className="text-green-300 font-medium">{role.impact}</p>
                      </div>
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