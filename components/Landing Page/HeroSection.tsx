'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Waitlist } from '@/components/Landing Page/Waitlist'
import { Header } from '../shared/Header'

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; color: string; vx: number; vy: number }[] = []

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      const color = ['#4FD1C5', '#63B3ED', '#4299E1', '#667EEA'][Math.floor(Math.random() * 4)]
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      stars.push({ x, y, radius, color, vx, vy })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

export function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
      <section className="relative flex items-center justify-center min-h-screen p-4  overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <StarBackground />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        <motion.span variants={itemVariants} className="text-xl md:tracking-wide mb-4 block">
          Experience a new way to share your stories and ideas.
        </motion.span>

        <motion.h1 variants={itemVariants} className="text-4xl flex flex-col md:text-6xl font-bold mb-6">
          AI-Powered{' '}
          <div className="inline-block bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: [
                  'Content',
                  'Presentations',
                  'Pitch Decks',
                  'Resumes',
                  'Websites',
                  'Documents',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          Creation Platform
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 p-2">
          Beautiful presentations, documents, and websites. No design or coding skills required.
          <br />
          Bring your ideas to life effortlessly.
        </motion.p>

        {/* <motion.div variants={itemVariants}>
          <Waitlist />
        </motion.div> */}
      </motion.div>
    </section>
  )
}