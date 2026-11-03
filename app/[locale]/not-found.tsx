import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { alternativeTitleFont } from '@/config/fonts';

export default function NotFound() {
  const t = useTranslations('statusPages.notFound');

  return (
    <main className="container mx-auto flex flex-col items-center gap-6 px-4 py-20 text-center">
      <p className={`${alternativeTitleFont.className} text-7xl text-[#5B2333]`} aria-hidden="true">404</p>
      <h1 className="text-2xl md:text-3xl font-medium">{t('title')}</h1>
      <p className="max-w-md text-[#747474]">{t('description')}</p>
      <Link
        href="/"
        className="rounded-lg bg-[#5B2333] px-6 py-2 text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {t('back')}
      </Link>
    </main>
  );
}
