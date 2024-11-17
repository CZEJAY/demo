'use client'

import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, X, Globe, Menu } from 'lucide-react'
import { Logo } from './Logo'
import { LanguageContext } from '@/context/languageProvider'
import { useTranslation } from '@/hooks/useTranslation'
import { TranslationKey } from '@/lib/translations'
import LanguageDropdown from './LanguageDropdown'



const navItems = [
  { label: 'pricing', hasNotification: true },
]

export function Header() {
  const { t, language } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
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
                    <NavItem key={index} label={t(item.label as TranslationKey)} hasNotification={item.hasNotification} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden md:block">
              <Link href="/auth/signin" className="px-4 py-1 text-sm font-medium border-white border-palette text-white hover:text-gray-300 transition-colors">
                {t('signIn')}
              </Link>
              <Link href="/auth/signup" className="ml-4 px-4 py-1 text-sm font-medium text-white gradient-bg rounded-md transition-colors">
                {t('getStarted')}
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-white" onClick={() => setIsMobileNavOpen(true)}>
                <Menu className="h-6 w-6" />
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
    </>
  )
}



function NavItem({ label, hasNotification }: { label: string; hasNotification?: boolean }) {
  return (
    <li className="relative">
      <motion.div
        className="flex items-center px-3 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {label}
        {hasNotification && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        )}
      </motion.div>
    </li>
  )
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language, setLanguage } = useContext(LanguageContext)
  const { t } = useTranslation()

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
            <li className="">
              {/* <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-white border-white border rounded px-2 py-1"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select> */}
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="text-white text-lg font-medium">
                <Link href="#" className="flex items-center">
                  {t(item.label as TranslationKey)}
                  {item.hasNotification && (
                    <span className="ml-2 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </Link>
              </li>
            ))}
            <li className='text-white -ml-[12px] text-lg font-medium'>

            <LanguageDropdown />
            </li>
          </ul>
        </nav>
        <div className="p-4 space-y-4">
          <button className="w-full py-2 text-sm font-medium border border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded-md">
            {t('signIn')}
          </button>
          <button className="w-full py-2 text-sm font-medium text-white gradient-bg rounded-md transition-colors">
            {t('getStarted')}
          </button>
        </div>
      </div>
    </motion.div>
  )
}