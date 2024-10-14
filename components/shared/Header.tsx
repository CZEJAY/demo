'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Logo } from './Logo'

const navItems = [
  { label: 'PRODUCTS', hasDropdown: true },
  { label: "WHAT'S NEW", hasNotification: true },
  { label: 'BOOK A DEMO' },
  { label: 'PRICING' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-5 max-w-5xl rounded-full mx-auto left-0 right-0 z-50 px-3 transition-colors duration-300 ${
        isScrolled ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-transparent'
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo isScrolled={isScrolled} />
            <nav className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-1 text-sm font-medium border-white border rounded-md text-white hover:text-gray-300 transition-colors">
              SIGN IN
            </button>
            <button className="ml-4 px-4 py-1 text-sm font-medium text-white gradient-bg rounded-md  transition-colors">
              GET STARTED
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
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