import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NavDesktop } from './nav-desktop';
import { NavMobile } from './nav-mobile';

export const Header = () => {
  const t = useTranslations("Home");

  return (
    <div className="bg-[#5B2333] text-primary-foreground">
      <NavMobile className="md:hidden" />
      <NavDesktop className="hidden md:flex" />
      <div className="container mx-auto py-6 md:py-10">
        <div className="max-w-4xl mx-auto text-center px-4 py-2">
          <Link href='/' className='w-56 md:w-64 mx-auto mb-6 block'>
            <Image
              src="/white-logo-bda.png"
              alt="Burbujas de Altura logo"
              width={600}
              height={300}
              priority
              sizes="(min-width: 768px) 256px, 224px"
              className='h-full'
            />
          </Link>
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground max-w-2xl mx-auto leading-relaxed">
            {t('headerTitle')} </p>
        </div>
      </div>
    </div>
  )
}
