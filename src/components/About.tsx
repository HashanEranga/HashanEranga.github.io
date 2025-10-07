'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Users, Code, Award, Target } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate about building scalable solutions and leading technical teams to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Professional Overview */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Briefcase className="mr-3 text-blue-400" size={24} />
                  Professional Journey
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a <span className="text-blue-400 font-semibold">Senior Software Engineer</span> at 
                  Cloud Solutions International with over 3 years of experience in enterprise software development. 
                  My expertise spans across full-stack development, cloud architecture, and team leadership.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Throughout my career, I've specialized in building scalable applications using modern technologies 
                  like <span className="text-blue-400">.NET</span>, <span className="text-red-400">Angular</span>, 
                  and cloud platforms, particularly <span className="text-purple-400">Microsoft Azure</span>.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <GraduationCap className="mr-3 text-green-400" size={24} />
                  Education & Foundation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I hold a <span className="text-green-400 font-semibold">BSc. (Hons) in Computer Engineering</span> from 
                  the University of Peradeniya (2017-2022), where I built a strong foundation in software engineering 
                  principles, system design, and emerging technologies.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Key Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                  <div className="flex items-center mb-3">
                    <Users className="mr-3 text-blue-400" size={24} />
                    <h4 className="text-lg font-semibold text-white">Leadership Impact</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Mentored <span className="text-blue-400 font-bold">100+</span> undergraduate students 
                    and led technical initiatives as IEEE Techverse Sri Lanka Publicity Team Leader
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                  <div className="flex items-center mb-3">
                    <Code className="mr-3 text-green-400" size={24} />
                    <h4 className="text-lg font-semibold text-white">Technical Excellence</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Architected enterprise-level applications, implemented microservices, 
                    and optimized systems for scalability and performance
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Award className="mr-3 text-purple-400" size={24} />
                    <h4 className="text-lg font-semibold text-white">Academic Contribution</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Served as Casual Instructor at University of Peradeniya, bridging 
                    theory and practical application for computer engineering students
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-500/20">
                  <div className="flex items-center mb-3">
                    <Target className="mr-3 text-orange-400" size={24} />
                    <h4 className="text-lg font-semibold text-white">Current Mission</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Building tomorrow's solutions through cloud-native development, 
                    team leadership, and continuous innovation in software engineering
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Core Values & Principles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                <p className="text-slate-300">
                  Continuous learning and adoption of cutting-edge technologies to solve complex problems
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Leadership</h4>
                <p className="text-slate-300">
                  Empowering teams through mentorship, knowledge sharing, and collaborative problem-solving
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-green-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Impact</h4>
                <p className="text-slate-300">
                  Creating scalable solutions that make a lasting difference in business and community
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}