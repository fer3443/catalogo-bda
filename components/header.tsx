"use client"
import Image from 'next/image'
import { NavDesktop } from './nav-desktop'
import { useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations("Home");
  return (
    <div className="bg-[#5B2333] text-primary-foreground">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <NavDesktop />
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
