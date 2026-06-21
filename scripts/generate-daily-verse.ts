import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { getDailyVerse, VerseResponse } from '../lib/bible';

async function main() {
  const today = new Date();
  const verse: VerseResponse = await getDailyVerse(today);

  const publicDir = resolve(process.cwd(), 'public');
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  const versesDir = resolve(publicDir, 'verses');
  if (!existsSync(versesDir)) {
    mkdirSync(versesDir, { recursive: true });
  }

  // Write the canonical daily-verse.json used by the static export
  const dailyPath = resolve(publicDir, 'daily-verse.json');
  writeFileSync(dailyPath, JSON.stringify(verse, null, 2));
  console.log(`Wrote ${dailyPath}`);

  // Also archive today's verse so a history can be built later
  const archivePath = resolve(versesDir, `${verse.date}.json`);
  writeFileSync(archivePath, JSON.stringify(verse, null, 2));
  console.log(`Wrote ${archivePath}`);
}

main().catch((error) => {
  console.error('Failed to generate daily verse:', error);
  process.exit(1);
});
