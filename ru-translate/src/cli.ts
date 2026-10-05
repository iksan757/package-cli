#!/usr/bin/env node

import * as fs from 'fs';
import * as readline from 'readline';
import { translateText, getAllLanguages } from './index';

const args = process.argv.slice(2);

function showHelp() {
  console.log(`
\x1b[1m\x1b[36mru-translate\x1b[0m - File & Text Translation CLI (Auto Language Detection)

\x1b[1mUSAGE:\x1b[0m
  $ rutrans <text> [target_lang]
  $ rutrans -f <file_path> [target_lang]
  $ rutrans [option]

\x1b[1mOPTIONS:\x1b[0m
  -f, --file <path>    Translate contents of a text file
  -l, --list           List all supported language codes
  -i, --interactive    Launch interactive mode
  -h, --help           Display this help menu

\x1b[1mEXAMPLES:\x1b[0m
  $ rutrans "Hello world" es
  $ rutrans -f ./document.txt ja
  $ rutrans -l
`);
}

function showLanguageList() {
  const languages = getAllLanguages();
  console.log(`\n\x1b[1m\x1b[36mSUPPORTED LANGUAGES (${languages.length})\x1b[0m\n`);
  
  // Format tampilan menjadi 2 kolom agar rapi
  const half = Math.ceil(languages.length / 2);
  for (let i = 0; i < half; i++) {
    const left = languages[i];
    const right = languages[i + half];

    const leftStr = left ? `\x1b[32m${left.code.padEnd(8)}\x1b[0m - ${left.nameEn.padEnd(20)}` : '';
    const rightStr = right ? `\x1b[32m${right.code.padEnd(8)}\x1b[0m - ${right.nameEn}` : '';

    console.log(`${leftStr}\t${rightStr}`);
  }
  console.log('\nUse code above as [target_lang]. Example: rutrans "Hello" ja\n');
}

async function startInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q: string): Promise<string> =>
    new Promise((resolve) => rl.question(q, resolve));

  console.log('\x1b[36m--- ru-translate Interactive Mode ---\x1b[0m\n');
  const input = await ask('Enter text or file path (-f file.txt): ');

  if (!input.trim()) {
    console.log('Input cannot be empty.');
    rl.close();
    return;
  }

  const target = await ask('Target language code (default: en): ');
  const targetLang = target.trim() || 'en';

  rl.close();

  let textToTranslate = input.trim();
  if (textToTranslate.startsWith('-f ')) {
    const filePath = textToTranslate.replace('-f ', '').trim();
    if (!fs.existsSync(filePath)) {
      console.error('Error: File not found.');
      return;
    }
    textToTranslate = fs.readFileSync(filePath, 'utf-8');
  }

  try {
    const result = await translateText(textToTranslate, targetLang, 'auto');
    console.log('\nResult:');
    console.log(result.text);
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
}

async function run() {
  if (args.length === 0) {
    console.error('Error: No input provided.');
    console.log('Run "rutrans --help" for available options.');
    return;
  }

  const flag = args[0];

  if (flag === '-h' || flag === '--help') {
    showHelp();
    return;
  }

  if (flag === '-i' || flag === '--interactive') {
    await startInteractive();
    return;
  }

  if (flag === '-l' || flag === '--list') {
    showLanguageList();
    return;
  }

  // Handle translate file
  if (flag === '-f' || flag === '--file') {
    const filePath = args[1];
    if (!filePath || !fs.existsSync(filePath)) {
      console.error(`Error: File "${filePath || ''}" not found.`);
      console.log('Run "rutrans --help" for available options.');
      return;
    }
    const text = fs.readFileSync(filePath, 'utf-8');
    const targetLang = args[2] || 'en';

    try {
      const result = await translateText(text, targetLang, 'auto');
      console.log(result.text);
    } catch (err: any) {
      console.error(`Error: ${err.message}`);
    }
    return;
  }

  // Handle opsi tidak dikenal / typo flag
  if (flag.startsWith('-')) {
    console.error(`Error: Unknown option "${flag}".`);
    console.log('Run "rutrans --help" for available options.');
    return;
  }

  // Handle translate teks biasa
  const text = args[0];
  const targetLang = args[1] || 'en';

  try {
    const result = await translateText(text, targetLang, 'auto');
    console.log(result.text);
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
}

run();
