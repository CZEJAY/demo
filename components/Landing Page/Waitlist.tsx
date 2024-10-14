'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Send, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export function Waitlist() {
  const [state, handleSubmit] = useForm('xkgwdbqz')
  const [email, setEmail] = useState('')
  const {t} = useTranslation()
  return (
    <AnimatePresence mode="wait">
      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="text-center p-8 gradient-bg rounded-lg shadow-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, delay: 0.2 }}
          >
            <CheckCircle className="w-16 h-16 mx-auto text-white mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">You're on the list!</h2>
          <p className="text-purple-100">We'll notify you when we launch. Get ready for something amazing!</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="max-w-md mx-auto space-y-6 p-8 bg-transparent rounded-lg "
        >
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("yourEmail")}
              className="w-full text-white bg-transparent px-4 py-3 border-2 border-sky-300 rounded-full focus:outline-none focus:border-sky-500  transition-colors duration-300"
              required
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Send className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />

          <motion.button
            className={`w-full py-3 rounded-full font-semibold text-white transition duration-300 ${
              state.submitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'gradient-bg'
            }`}
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {state.submitting ? (
              <div className="flex items-center justify-center space-x-2">
                <motion.div
                  className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <span>Joining...</span>
              </div>
            ) : (
              t("wait_list")
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}