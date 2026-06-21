import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { DailyVerse, getDailyVerseForDate } from './verses';

export interface VerseResponse {
  verse: string;
  reference: string;
  date: string;
  devotionalTitle: string;
  devotional: string[];
  pullQuote: string;
  prayer: string[];
}

const API_BASE = process.env.BIBLE_API_BASE_URL || 'https://rest.api.bible/v1';
const API_KEY = process.env.BIBLE_API_KEY;
const DEFAULT_BIBLE_ID = process.env.BIBLE_ID || 'de4e12af7f28f599-01';

function stripHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\d+\s+/g, '')
    .trim();
}

export async function fetchVerseFromApi(apiReference: string): Promise<string | null> {
  if (!API_KEY) {
    return null;
  }

  try {
    const url = `${API_BASE}/bibles/${DEFAULT_BIBLE_ID}/verses/${apiReference}`;
    const response = await fetch(url, {
      headers: {
        'api-key': API_KEY,
        Accept: 'application/json',
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      console.warn(`API.Bible returned ${response.status} for ${apiReference}`);
      return null;
    }

    const data = await response.json();
    const content: string = data?.data?.content ?? '';
    return stripHtml(content);
  } catch (error) {
    console.warn('Failed to fetch verse from API.Bible:', error);
    return null;
  }
}

export async function getDailyVerse(date: Date = new Date()): Promise<VerseResponse> {
  const curated = getDailyVerseForDate(date);
  const apiText = await fetchVerseFromApi(curated.apiReference);

  return {
    verse: apiText || curated.fallbackText,
    reference: curated.reference,
    date: date.toISOString().split('T')[0],
    devotionalTitle: curated.devotionalTitle,
    devotional: curated.devotional,
    pullQuote: curated.pullQuote,
    prayer: curated.prayer,
  };
}

export function getDailyVerseSync(date: Date = new Date()): VerseResponse {
  const curated = getDailyVerseForDate(date);
  return {
    verse: curated.fallbackText,
    reference: curated.reference,
    date: date.toISOString().split('T')[0],
    devotionalTitle: curated.devotionalTitle,
    devotional: curated.devotional,
    pullQuote: curated.pullQuote,
    prayer: curated.prayer,
  };
}

export function getDailyVerseFromJson(date: Date = new Date()): VerseResponse | null {
  const today = date.toISOString().split('T')[0];
  const jsonPath = resolve(process.cwd(), 'public', 'daily-verse.json');

  if (!existsSync(jsonPath)) {
    return null;
  }

  try {
    const content = readFileSync(jsonPath, 'utf-8');
    const parsed: VerseResponse = JSON.parse(content);
    if (parsed.date === today) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}
