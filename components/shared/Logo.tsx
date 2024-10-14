'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Logo({ isScrolled }: { isScrolled?: boolean }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  return (
    <motion.div
      className="relative font-sans text-2xl md:text-4xl font-bold tracking-tighter"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
    >
      {['P', 'a', 't', 'e', 'x', 'a'].map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          className={`inline-block text-white`}
          style={{
            textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        className={`absolute -bottom-1 left-0 w-full h-0.5 ${
          isScrolled ? 'gradient-bg' : 'bg-white'
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </motion.div>
  )
}