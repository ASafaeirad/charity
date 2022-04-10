import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as glossary from './resources/fa/glossary.json';

type I18nNamespace = 'glossary';
export const defaultNS: I18nNamespace = 'glossary';

export const resources = {
  fa: {
    glossary,
  },
} as const;

type Language = 'fa';

export function initI18n(
  {
    defaultLanguage = 'fa',
    ns,
  }: {
    defaultLanguage?: Language;
    ns?: I18nNamespace[];
  } = { ns: ['glossary'] },
) {
  return i18n.use(initReactI18next).init({
    resources,
    lng: 'fa',
    fallbackLng: defaultLanguage,
    ns,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
}
