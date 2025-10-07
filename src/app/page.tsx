'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-400 text-lg font-medium animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="py-20">
        <About />
      </section>
      
      <section id="skills" className="py-20 bg-slate-800">
        <Skills />
      </section>
      
      <section id="experience" className="py-20">
        <Experience />
      </section>
      
      <section id="leadership" className="py-20 bg-slate-800">
        <Leadership />
      </section>
      
      <section id="certifications" className="py-20">
        <Certifications />
      </section>
      
      <section id="contact" className="py-20 bg-slate-800">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}