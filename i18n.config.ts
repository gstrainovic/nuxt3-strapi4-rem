export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  messages: {
    en: {
      welcome: 'Welcome',
      en: 'English'
    },
    'de-CH': {
      welcome: 'Willkommen',
      'de-CH': 'Deutsch'
    }
  },
}))