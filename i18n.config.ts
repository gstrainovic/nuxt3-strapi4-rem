export default defineI18nConfig(() => ({
  locales: ['de-CH', 'en'],
  defaultLocale: 'de-CH',
  fallbackLocale: 'de-CH',
  // strategy: 'prefix_except_default',
  messages: {
    en: {
      welcome: 'Welcome',
      en: 'English',
      descriptionEvent: 'Description Event'
    },
    'de-CH': {
      welcome: 'Willkommen',
      'de-CH': 'Deutsch',
      descriptionEvent: 'Eventbeschreibung'

    }
  },
}))