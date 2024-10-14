export const translations = {
    en: {
      welcome: "Welcome",
      signIn: "Sign In",
      getStarted: "Get Started",
      pricing: "Pricing",
      language: "Language",
    },
    es: {
      welcome: "Bienvenido",
      signIn: "Iniciar Sesión",
      getStarted: "Comenzar",
      pricing: "Precios",
      language: "Idioma",
    },
    fr: {
      welcome: "Bienvenue",
      signIn: "Se Connecter",
      getStarted: "Commencer",
      pricing: "Tarification",
      language: "Langue",
    },
    de: {
      welcome: "Willkommen",
      signIn: "Anmelden",
      getStarted: "Loslegen",
      pricing: "Preisgestaltung",
      language: "Sprache",
    },
    zh: {
      welcome: "欢迎",
      signIn: "登录",
      getStarted: "开始使用",
      pricing: "定价",
      language: "语言",
    },
  }
  
  export type Language = keyof typeof translations
  export type TranslationKey = keyof typeof translations.en