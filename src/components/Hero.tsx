'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-0 lg:mr-12 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Profile Image Container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/hashanEranga.jpg"
                      alt="Hashan Eranga - Senior Software Engineer"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover rounded-full"
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
                >
                  <span className="text-sm font-semibold">.NET</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-red-500 text-white p-3 rounded-lg shadow-lg"
                >
                  <span className="text-sm font-semibold">Angular</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    x: [0, 10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                  className="absolute top-1/2 -right-6 bg-purple-500 text-white p-2 rounded-lg shadow-lg transform -translate-y-1/2"
                >
                  <span className="text-xs font-semibold">Cloud</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left flex-1 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                👋 Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            >
              Hashan Eranga
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl lg:text-3xl text-blue-400 font-semibold mb-2">
                Senior Software Engineer
              </h2>
              <p className="text-xl text-slate-300">
                Cloud Solutions International
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-slate-300 mb-8 max-w-2xl"
            >
              Specializing in <span className="text-blue-400 font-semibold">.NET</span>, 
              <span className="text-red-400 font-semibold"> Angular</span>, and 
              <span className="text-purple-400 font-semibold"> Cloud Architecture</span>. 
              Building tomorrow's solutions with 4+ years of enterprise experience and 
              passionate about <span className="text-green-400 font-semibold">mentoring</span> the next generation of engineers.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/hashan-eranga-57584b136/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={16} />
              </motion.a>
              
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-center"
            >
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-blue-400">4+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-slate-300">Students Mentored</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-green-400">IEEE</div>
                <div className="text-sm text-slate-300">Volunteer Leader</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition-colors duration-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}