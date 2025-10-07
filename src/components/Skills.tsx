'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  "Programming Languages": [
    { name: "C#", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-yellow-600" }
  ],
  "Frameworks & Libraries": [
    { name: ".NET Core", level: 95, color: "from-purple-500 to-purple-600" },
    { name: "Angular", level: 90, color: "from-red-500 to-red-600" },
    { name: "ASP.NET Core", level: 92, color: "from-blue-500 to-blue-600" }
  ],
  "Cloud & DevOps": [
    { name: "Microsoft Azure", level: 85, color: "from-cyan-500 to-cyan-600" },
    { name: "Docker", level: 80, color: "from-blue-600 to-blue-700" },
    { name: "Kubernetes", level: 75, color: "from-indigo-500 to-indigo-600" }
  ],
  "Databases & Tools": [
    { name: "SQL Server", level: 90, color: "from-orange-500 to-orange-600" },
    { name: "MongoDB", level: 75, color: "from-green-500 to-green-600" },
    { name: "Git", level: 92, color: "from-gray-500 to-gray-600" }
  ]
};

export default function Skills() {
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
              Technical Skills
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expertise in modern technologies and frameworks for building enterprise solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}