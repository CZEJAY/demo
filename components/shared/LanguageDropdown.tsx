"use client"

import { LanguageContext } from "@/context/languageProvider"
import { useTranslation } from "@/hooks/useTranslation"
import { useContext, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Globe } from "lucide-react"
import { languages } from "@/lib/utils"

export default function LanguageDropdown({ isTop, className }: { isTop?: boolean, className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const { t } = useTranslation()

  return (
    <li className={`relative list-none ${className}`}>
      <motion.div
        className="flex items-center px-3 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        // whileHover={{ y: isTop ? -1 : 1, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Globe className="mr-2 h-4 w-4" />
        {/* {languages.find(lang => lang.code === language)?.name} */}
        Language
        <ChevronDown className="ml-1 h-4 w-4" />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: isTop ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isTop ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${
              isTop ? "bottom-full mb-2" : "top-full mt-2"
            }`}
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
