# Metanoia

A quiet, premium daily Bible verse experience built with Next.js 15, TypeScript, Tailwind CSS, and API.Bible.

## Features

- **Deterministic daily verse** — every visitor sees the same verse on the same day, selected by day-of-year.
- **Curated devotional + prayer** — each day includes reflective text and a closing prayer.
- **API.Bible integration** — live verse text fetched from API.Bible with a curated fallback.
- **Premium editorial design** — minimal dark theme with Playfair Display and Hanken Grotesk typography.
- **Static export** — deployed as static files via Vercel (or any static host).
- **Daily automation** — GitHub Action regenerates `public/daily-verse.json` every day.
- **PWA-ready** — installable with a web app manifest.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Default |
| --- | --- | --- |
| `BIBLE_API_KEY` | Yes* | — |
| `BIBLE_API_BASE_URL` | No | `https://rest.api.bible/v1` |
| `BIBLE_ID` | No | `de4e12af7f28f599-01` (KJV) |

\* The app works without an API key using curated fallback text, but live verse fetching requires one.

## Daily Automation

The GitHub Action in `.github/workflows/daily-verse.yml` runs every day at 04:17 UTC, calls API.Bible, and commits the resulting `public/daily-verse.json` so the static site always shows the current day\'s verse.

## Deployment

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Add `BIBLE_API_KEY` as an environment variable.
4. Vercel builds and deploys the static export from `dist/`.

## License

MIT
