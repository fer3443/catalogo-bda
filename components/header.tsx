"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { NavDesktop, NavMobile } from './molecules';
import { useIsMobile } from '@/hooks';

export const Header = () => {
  const t = useTranslations("Home");
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#5B2333] text-primary-foreground">
      {isMobile ? <NavMobile /> : <NavDesktop />}
      <div className="container mx-auto pb-6 md:pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className='w-56 mx-auto mb-6'>
            <Image
              src="/white-logo-bda.png"
              alt="Burbujas de Altura logo"
              width={600}
              height={300}
              className='h-full'
            />
          </div>
          <p className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto leading-relaxed">
            {t('headerTitle')} </p>
        </div>
      </div>
    </div>
  )
}
