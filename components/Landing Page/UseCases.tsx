'use client'

import { useCases } from "@/lib/data";
import { motion } from 'framer-motion';
import { ReactElement, useMemo } from "react";
import { useInView } from 'react-intersection-observer';

const colors = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-purple-500',
  'text-pink-500',
  'text-indigo-500',
  'text-teal-500',
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function UseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 md:gap-10 gap-y-10"
    >
      {useCases.map((item, idx) => (
        <CardItem
          key={idx}
          title={item.title}
          features={item.features}
          index={idx}
          inView={inView}
        />
      ))}
    </section>
  );
}

interface FeaturesType {
  icon: ReactElement;
  text: string;
}

function CardItem({
  title,
  features,
  index,
  inView,
}: {
  title: string;
  features: FeaturesType[];
  index: number;
  inView: boolean;
}) {
  const coloredFeatures = useMemo(() => 
    features.map(feature => ({
      ...feature,
      color: getRandomColor()
    })),
    [features]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-gradient-to-br from-white to-gray-100 shadow-md p-6 rounded-xl space-y-6 transform hover:scale-105 transition-transform duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="text-2xl font-semibold gradient-text"
      >
        {title}
      </motion.h2>

      <ul className="space-y-4">
        {coloredFeatures.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
            className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg shadow-sm"
          >
            <span className={`p-2 ${feature.color} bg-opacity-20 shadow-inner rounded-full text-xl`}>
              {feature.icon}
            </span>
            <p className="text-gray-700">{feature.text}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}