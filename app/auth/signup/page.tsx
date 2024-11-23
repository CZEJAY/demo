'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageCollage from '../_components/image-collage'
import SignInForm from '../_components/SignInForm'
import { Bolt } from 'lucide-react'
import AuthPage from '../_components/AuthPage'
import SignUpForm from '../_components/SignUpForm'

export default function AuthLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <motion.div 
        className="flex-1 overflow-y-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center min-h-full p-6">
          <div className="w-full max-w-sm">
            <motion.h1 
              className="text-4xl font-bold gradient-text mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sign up
            </motion.h1>
            <SignUpForm />
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* <Image src="/patexa-logo.svg" alt="Patexa Logo" width={100} height={32} /> */}
              <Bolt className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <ImageCollage />
      </div>
    </div>
  )
}