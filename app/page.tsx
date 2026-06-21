import { getDailyVerse, getDailyVerseFromJson, VerseResponse } from '@/lib/bible';
import { formatVerseDate } from '@/lib/verses';

export const revalidate = 3600;

async function loadVerse(): Promise<VerseResponse> {
  const fromJson = getDailyVerseFromJson();
  if (fromJson) {
    return fromJson;
  }
  return getDailyVerse();
}

export default async function Home() {
  const { verse, reference, devotionalTitle, devotional, pullQuote, prayer } =
    await loadVerse();
  const todayLabel = formatVerseDate();

  return (
    <main className="pt-24 md:pt-32 pb-32 relative">
      {/* Subtle editorial grid background */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-50 z-0 max-w-container-max mx-auto" />

      <article className="relative z-10 max-w-3xl mx-auto px-6 md:px-0">
        {/* Verse Header Section */}
        <header className="text-center mb-20 md:mb-24">
          <div className="inline-block border-b border-on-surface/10 pb-4 mb-10 md:mb-12">
            <span className="font-sans text-label-caps text-tertiary tracking-[0.2em] uppercase">
              Verse of the Day · {todayLabel}
            </span>
          </div>

          <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-on-surface mb-8 italic text-balance">
            “{verse}”
          </h1>

          <div className="flex items-center justify-center gap-4 text-on-surface-variant">
            <span className="h-px w-8 bg-on-surface-variant/30" />
            <span className="font-serif text-headline-md">{reference}</span>
            <span className="h-px w-8 bg-on-surface-variant/30" />
          </div>
        </header>

        {/* Devotional Section */}
        <section className="mb-20 md:mb-24 space-y-8 font-sans text-body-lg text-on-surface-variant leading-relaxed">
          {devotional.map((paragraph, index) => (
            <p
              key={index}
              className={index === 0 ? 'drop-cap' : undefined}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {/* Pull Quote */}
          <blockquote className="my-14 md:my-16 pl-6 md:pl-8 border-l-2 border-tertiary/50 py-4 font-serif text-headline-md text-on-surface italic">
            “{pullQuote}”
          </blockquote>
        </section>

        {/* Divider */}
        <div className="flex justify-center mb-20 md:mb-24">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-tertiary/30"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Prayer Section */}
        <section className="bg-surface-container-low p-8 md:p-16 border border-on-surface/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-tertiary/20" />
          <h2 className="font-sans text-label-caps text-tertiary mb-8 uppercase tracking-[0.2em]">
            A Prayer for {devotionalTitle}
          </h2>
          <div className="font-serif text-headline-md text-on-surface space-y-6">
            {prayer.map((line, index) => {
              const isAmen = line.trim().toLowerCase() === 'amen.';
              return (
                <p
                  key={index}
                  className={isAmen ? 'pt-4 text-on-surface-variant font-sans text-body-md' : undefined}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </section>
      </article>
    </main>
  );
}
