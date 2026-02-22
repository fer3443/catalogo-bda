"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { NavDesktop, NavMobile } from '.';
import { useIsMobile } from '@/hooks';
import Link from 'next/link';

export const Header = () => {
  const t = useTranslations("Home");
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#5B2333] text-primary-foreground">
      {isMobile ? <NavMobile /> : <NavDesktop />}
      <div className="container mx-auto pb-6 md:pb-8">
        <div className="max-w-4xl mx-auto text-center px-4 py-2">
          <Link href='/' className='w-56 md:w-64 mx-auto mb-6 block'>
            <Image
              src="/white-logo-bda.png"
              alt="Burbujas de Altura logo"
              width={600}
              height={300}
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
