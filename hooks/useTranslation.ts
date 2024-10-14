"use client"
import { useContext } from 'react'
import { LanguageContext } from '@/context/languageProvider'
import { TranslationKey, translations } from '@/lib/translations'

export function useTranslation() {
  const { language } = useContext(LanguageContext)

  function t(key: TranslationKey) {
    return translations[language][key]
  }

  return { t, language }
}