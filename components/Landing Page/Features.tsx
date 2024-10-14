'use client'

import { features } from "@/lib/data";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl uppercase tracking-wider gradient-text font-semibold"
        >
          Features
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-xl font-medium leading-tight text-gray-900"
        >
          Transform Your Content with Our Powerful Features
        </motion.h2>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
            className="gradient-bg text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
            <p className="text-sm">Discover how this feature can elevate your workflow and enhance your productivity.</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
