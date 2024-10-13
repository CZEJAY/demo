'use client'

import Image from "next/image";
import { teamWork } from "@/lib/data";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Teamwork() {
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
          className="text-xl uppercase tracking-wider text-indigo-600 font-semibold"
        >
          Teamwork
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold text-gray-900"
        >
          Team Collaboration with Patexa
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamWork.map((item, idx) => (
          <CardItem
            key={idx}
            title={item.label}
            content={item.content}
            src={item.src}
            index={idx}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}

function CardItem({
  title,
  content,
  src,
  index,
  inView,
}: {
  title: string;
  content: string;
  src: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg p-5 rounded-xl space-y-5 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 overflow-hidden"
    >
      {/* Animated SVG Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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

      <Image
        src={`/assets/${src}.jpg`}
        width={150}
        height={150}
        className="rounded-md object-cover h-[10rem] w-[10rem] z-10"
        alt={src}
      />

      <div className="text-center z-10">
        <div className="md:min-h-[5rem] mb-2">
          <span className="text-xl gradient-text font-medium">{title}</span>
        </div>
        <p className="text-gray-600">{content}</p>
      </div>
    </motion.div>
  );
}
