import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];
type Href = Parameters<typeof getPathname>[0]['href'];

// URL publica del sitio. Definir NEXT_PUBLIC_SITE_URL en produccion (ej. https://catalogo.midominio.com).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
).replace(/\/$/, '');

/** Canonical y hreflang (alternates.languages) de una ruta, con el pathname localizado de cada idioma. */
export function buildAlternates(locale: Locale, href: Href) {
  const pathFor = (l: Locale) => getPathname({ locale: l, href });
  return {
    canonical: pathFor(locale),
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, pathFor(l)])),
      'x-default': pathFor(routing.defaultLocale),
    },
  };
}
