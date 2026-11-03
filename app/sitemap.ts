import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SUBLINES_BY_LINE } from '@/constants/sublines';
import { buildAlternates, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const hrefs = [
    '/',
    '/lines',
    ...Object.keys(SUBLINES_BY_LINE).map((line) => ({ pathname: '/lines/[line]', params: { line } }) as const),
  ] as const;

  return hrefs.flatMap((href) =>
    routing.locales.map((locale) => {
      const { canonical, languages } = buildAlternates(locale, href as never);
      return {
        url: `${SITE_URL}${canonical}`,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(languages).map(([l, path]) => [l, `${SITE_URL}${path}`])
          ),
        },
      };
    })
  );
}
