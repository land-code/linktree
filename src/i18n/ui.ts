export const languages = {
  en: "English",
  es: "Español",
} as const

export const defaultLang = "en" as const;

export const ui: Record<keyof typeof languages, Record<string, string>> = {
  en: {
    "components.social.presentation":
      "I am a front-end developer and I dedicate all my days to learn and spread what I learn.",
    "components.title.twitch": "Follow me",
    "components.title.portfolio": "My portfolio",
    "components.title.portfolio.description":
      "Know more about me and my projects",
    "components.title.youtube": "My last video",
  },
  es: {
    "components.social.presentation":
      "Soy front-end developer y dedico todos mis días a aprender y divulgar lo que aprendo.",
    "components.title.twitch": "Sígueme",
    "components.title.portfolio": "Mi portfolio",
    "components.title.portfolio.description":
      "Conoce más sobre mí y mis proyectos",
    "components.title.youtube": "Mi último video",
  },
} as const;
