import axios from 'axios';
import languagesData from './data/translate_support_language.json';
import { Language, TranslationResult } from './types';

export * from './types';

export const languages: Language[] = languagesData as Language[];

/**
 * Translate language to
 */
export async function translateText(
  text: string,
  targetLang: string = 'en',
  sourceLang: string = 'auto'
): Promise<TranslationResult> {
  if (!text) {
    throw new Error('Text to translate cannot be empty');
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await axios.get(url);

    const translatedText = response.data[0].map((item: [string]) => item[0]).join('');
    const detectedSource = response.data[2] || sourceLang;

    return {
      text: translatedText,
      from: detectedSource,
      to: targetLang
    };
  } catch (error: any) {
    throw new Error(`Translation failed: ${error.message}`);
  }
}

/**
 * Support languages
 */
export function getAllLanguages(): Language[] {
  return languages;
}

/**
 * Searching for code language (example: 'id', 'en', 'ja')
 */
export function getLanguageByCode(code: string): Language | undefined {
  if (!code) return undefined;
  return languages.find((lang) => lang.code.toLowerCase() === code.toLowerCase());
}

/**
 * Check what languages are supported
 */
export function isLanguageSupported(code: string): boolean {
  if (!code) return false;
  return languages.some((lang) => lang.code.toLowerCase() === code.toLowerCase());
}
