'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { alternativeTitleFont } from '@/config/fonts';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations('statusPages.error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container mx-auto flex flex-col items-center gap-6 px-4 py-20 text-center">
      <h1 className={`${alternativeTitleFont.className} text-5xl text-[#5B2333]`}>{t('title')}</h1>
      <p className="max-w-md text-[#747474]">{t('description')}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-[#5B2333] px-6 py-2 text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
        >
          {t('retry')}
        </button>
        <Link href="/" className="rounded-lg border border-[#5B2333] px-6 py-2 text-[#5B2333] hover:bg-[#5B2333]/5 transition-colors">
          {t('back')}
        </Link>
      </div>
    </main>
  );
}
