import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as errors from './fa/errors.json';
import * as glossary from './fa/glossary.json';

type I18nNamespace = 'glossary';
export const defaultNS: I18nNamespace = 'glossary';
export type ErrorKeys = keyof typeof errors;

export const resources = {
  fa: {
    glossary,
    errors,
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
