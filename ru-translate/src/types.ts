export interface Language {
  code: string;
  nameEn: string;
  nameZh?: string;
  nameNative: string;
}

export interface TranslationResult {
  text: string;
  from: string;
  to: string;
}
