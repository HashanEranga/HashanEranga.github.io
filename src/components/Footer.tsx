'use client';

import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-slate-300">
            <span>Built with</span>
            <Heart className="text-red-400" size={16} />
            <span>using Next.js and Tailwind CSS</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
            <Code size={16} />
            <span>© 2024 Hashan Eranga. All rights reserved.</span>
          </div>
          
          <p className="text-slate-500 text-xs">
            &quot;Code with passion, lead with vision, innovate with purpose&quot;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}