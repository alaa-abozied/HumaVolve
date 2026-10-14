import en from './en.json';

export const defaultLocale = 'en';
export const messages: Record<string, typeof en> = { en };

export function t(key: keyof typeof en): string {
  return en[key] ?? key;
}
