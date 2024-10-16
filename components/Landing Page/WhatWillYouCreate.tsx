'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { whatWillYouCreate } from "@/lib/data"

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0  overflow-hidden">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.circle
          cx="10%"
          cy="10%"
          r="50"
          fill="url(#gradient1)"
          animate={{
            cx: ["10%", "90%", "10%"],
            cy: ["10%", "90%", "10%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.circle
          cx="90%"
          cy="90%"
          r="70"
          fill="url(#gradient2)"
          animate={{
            cx: ["90%", "10%", "90%"],
            cy: ["90%", "10%", "90%"],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <defs>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
          </radialGradient>
          <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export function WhatWillYouCreate() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 overflow-hidden">
      <AnimatedBackground />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className="relative z-10 text-center"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Create with <span className="gradient-text">Patexa</span></h2>
        <p className="mt-4 text-xl gradient-text">
          No design, writing, or coding skills needed. Bring your ideas to life like never before.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="relative z-10 grid md:grid-cols-2 gap-8"
      >
        {whatWillYouCreate.map((item, idx) => (
          <CardItem
            key={idx}
            title={item.label}
            content={item.content}
            src={item.src}
          />
        ))}
      </motion.div>
    </section>
  )
}

function CardItem({
  title,
  content,
  src,
}: {
  title: string
  content: string
  src: string
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75" 
           style={{
             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.4) 0%, rgba(59, 130, 246, 0) 50%)`,
           }}
      />
      <div className="absolute inset-1 rounded-lg bg-white" />
      <div className="relative z-10 flex flex-col items-start p-8 space-y-4">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <img
            src={`/assets/${src}.png`}
            width={48}
            height={48}
            alt={title}
            className="w-12 h-12 object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold text-left text-gray-900">{title}</h3>
        <p className="text-gray-600 text-left">{content}</p>
      </div>
    </motion.div>
  )
}