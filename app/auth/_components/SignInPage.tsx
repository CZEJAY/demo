'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageCollage from './image-collage'
import SignInForm from './SignInForm'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      <motion.div 
        className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-sm">
          <motion.h1 
            className="text-4xl font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sign in
          </motion.h1>
          <SignInForm />
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Image src="/patexa-logo.svg" alt="Patexa Logo" width={100} height={32} />
          </motion.div>
        </div>
      </motion.div>
      <div className="hidden lg:block lg:flex-1">
        <ImageCollage />
      </div>
    </div>
  )
}