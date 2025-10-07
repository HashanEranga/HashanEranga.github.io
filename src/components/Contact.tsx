'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hashaneranga@ieee.org",
    href: "mailto:hashaneranga@ieee.org"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 78 563 0194",
    href: "tel:+94785630194"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/hashan-eranga-57584b136/"
  },
  {
    icon: Github,
    label: "Portfolio",
    value: "hashaneranga.github.io",
    href: "https://hashaneranga.github.io"
  }
];

export default function Contact() {
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
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to collaborate or discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-colors duration-300 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        <p className="text-white font-medium">{contact.value}</p>
                      </div>
                      {contact.href.startsWith('http') && (
                        <ExternalLink className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" size={16} />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation. Whether you're 
                  looking for a technical leader, a mentor, or a collaborative partner, 
                  I'd love to connect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Available for collaboration</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin size={16} />
                    <span>Based in Sri Lanka 🇱🇰</span>
                  </div>
                </div>

                <motion.a
                  href="https://www.linkedin.com/in/hashan-eranga-57584b136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink size={16} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}