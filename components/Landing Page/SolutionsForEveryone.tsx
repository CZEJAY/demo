'use client'

import { solutions } from "@/lib/data";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SolutionsForEveryone() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12"
    >
      <div className="space-y-4 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl uppercase tracking-wider gradient-text font-semibold"
        >
          Perfect for Every Industry and Professional
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-xl font-bold text-gray-900"
        >
          What can Patexa do for you?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="text-gray-600 max-w-2xl"
        >
          No matter your role or design and copywriting skills, Patexa
          simplifies your tasks with our comprehensive solution, helping you
          save up to 65% of your time.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((item, idx) => (
          <CardItem
            key={idx}
            imageSrc={item.imageSrc}
            altText={item.altText}
            title={item.title}
            description={item.description}
            index={idx}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}

function CardItem({
  imageSrc,
  altText,
  title,
  description,
  index,
  inView,
}: {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg p-6 flex items-center space-x-6 hover:shadow-xl transform transition-transform duration-300"
    >
      <Image
        src={`/assets/${imageSrc}.jpg`}
        width={100}
        height={100}
        alt={altText}
        className="rounded-lg object-cover"
      />

      <div className="flex flex-col">
        <span className="text-xl font-medium text-primary">{title}</span>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
