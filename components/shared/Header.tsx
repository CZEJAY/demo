'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, X, Globe } from 'lucide-react'
import { Logo } from './Logo'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
]

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (code: string) => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const navItems = [
  { label: 'PRICING', hasNotification: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <LanguageProvider>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 w-full mx-auto left-0 right-0 z-50 shadow-xl px-3 transition-colors duration-300 ${
          isScrolled ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo isScrolled={isScrolled} />
              <nav className="hidden md:block ml-10">
                <ul className="flex space-x-4">
                  <LanguageDropdown />
                  {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden md:block">
              <button className="px-4 py-1 text-sm font-medium border-white border-palette text-white hover:text-gray-300 transition-colors">
                SIGN IN
              </button>
              <button className="ml-4 px-4 py-1 text-sm font-medium text-white gradient-bg rounded-md transition-colors">
                GET STARTED
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-white" onClick={() => setIsMobileNavOpen(true)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileNavOpen && (
          <MobileNav 
            isOpen={isMobileNavOpen} 
            onClose={() => setIsMobileNavOpen(false)} 
          />
        )}
      </AnimatePresence>
    </LanguageProvider>
  )
}

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <li className="relative">
      <motion.div
        className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Globe className="mr-2 h-4 w-4" />
        {languages.find(lang => lang.code === language)?.name}
        <ChevronDown className="ml-1 h-4 w-4" />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
              >
                {lang.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

function NavItem({ label, hasDropdown, hasNotification }: { label: string; hasDropdown?: boolean; hasNotification?: boolean }) {
  return (
    <li className="relative">
      <motion.div
        className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
        {hasNotification && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        )}
      </motion.div>
    </li>
  )
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 overflow-y-auto"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          <Logo />
          <button onClick={onClose} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="text-white text-lg font-medium">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-white border-white border rounded px-2 py-1"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="text-white text-lg font-medium">
                <Link href="#" className="flex items-center">
                  {item.label}
                  {/* {item.hasDropdown && <ChevronDown className="ml-2 h-5 w-5" />} */}
                  {item.hasNotification && (
                    <span className="ml-2 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 space-y-4">
          <button className="w-full py-2 text-sm font-medium border border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded-md">
            SIGN IN
          </button>
          <button className="w-full py-2 text-sm font-medium text-white gradient-bg rounded-md transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </motion.div>
  )
}