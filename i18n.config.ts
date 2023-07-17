export default defineI18nConfig(() => ({
  locales: ['de-CH', 'en'],
  defaultLocale: 'de-CH',
  fallbackLocale: 'de-CH',
  // strategy: 'prefix_except_default',
  messages: {
    en: {
      welcome: 'Welcome',
      en: 'English',
      speaker: 'Speaker',
      descriptionEvent: 'Description Event',
      date: 'Date',
      place: 'Place',
      buyTickets: 'Buy Tickets',
      billingDetails: 'Billing Details',
    },
    'de-CH': {
      welcome: 'Willkommen',
      'de-CH': 'Deutsch',
      descriptionEvent: 'Eventbeschreibung',
      speaker: 'Sprecher',
      date: 'Datum',
      place: 'Ort',
      buyTickets: 'Tickets Kaufen',
      billingDetails: 'Rechnungsdaten',

    }
  },
}))