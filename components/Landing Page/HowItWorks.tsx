'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-primary">
          Create, Share, and Impress—Fast
        </h2>
        <p className="text-gray-600 text-lg">
          Make stunning presentations, documents, resumes, and websites in minutes with smart AI. Get everything done faster, with less effort.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="relative hidden md:block bg-gradient-to-br from-gray-100 to-gray-200 shadow-md rounded-md overflow-hidden"
      >
        {/* Animated SVG Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full animate-spin-slow"
          >
            <path
              fill="#A78BFA"
              d="M43.2,-47.2C55.7,-37.6,63.3,-22.1,61.9,-8.8C60.6,4.5,50.3,16.6,41.2,27.2C32.2,37.8,24.4,46.8,13.5,49.2C2.7,51.6,-11.2,47.4,-24.5,41.8C-37.8,36.2,-50.4,29.2,-54.2,18.3C-58.1,7.5,-53.3,-7.3,-46,-18.3C-38.6,-29.4,-28.6,-36.8,-18.2,-46.4C-7.7,-56,2.9,-67.7,14.9,-69.2C26.8,-70.7,41.1,-61.8,43.2,-47.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
