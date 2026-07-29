import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md'
import { LuInstagram, LuMail, LuEarth } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { getTranslations } from 'next-intl/server';

export async function Footer(){
  const f = await getTranslations("footer");
  return (
    <footer className='bg-[#5c172a] text-primary-foreground'>
      <div className='grid grid-cols-3 mx-auto max-w-7xl py-14 sm:py-10 px-5 gap-6'>
        <div className='col-span-full md:col-span-1 space-y-2'>
          <Link href='/' className='w-42 mx-auto sm:mx-0 lg:w-52 block'>
            <Image
              src="/white-logo-bda.png"
              alt="Burbujas de Altura logo"
              width={600}
              height={300}
              className='h-full'
            />
          </Link>
        </div>
          <div className='col-span-full md:col-span-1 space-y-2'>
          <h3 className="font-semibold">{f("contact")}</h3>
          <Link
            href="mailto:export@burbujasdealtura.com.ar"
            className="text-xs lg:text-base font-light flex items-center gap-2 text-nowrap hover:font-medium px-1 duration-200 text-secondary hover:text-white"
          >
            <LuMail /> export@burbujasdealtura.com.ar
          </Link>
          <Link
            href="mailto:info@burbujasdealtura.com.ar"
            className="text-xs lg:text-base font-light flex items-center gap-2 text-nowrap hover:font-medium px-1 duration-200 text-secondary hover:text-white"
          >
            <LuMail /> info@burbujasdealtura.com.ar
          </Link>
        </div>
        <div className='col-span-full md:col-span-1 flex flex-col gap-2 space-y-2'>
          <h3 className="font-semibold">{f("location")}</h3>
          <div className='flex items-start gap-2'>
            <MdOutlineLocationOn />
            <Link
              className='text-xs lg:text-sm font-light text-secondary hover:text-white'
              href='https://www.google.com/maps/place/Bodega+Burbujas+de+Altura/@-26.0355294,-65.9807108,111m/data=!3m1!1e3!4m6!3m5!1s0x941f31cb8c95b503:0xfa032e61ca1bf6cc!8m2!3d-26.0354957!4d-65.9804077!16s%2Fg%2F11gxrcfj37?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel="noopener noreferrer"
            >
              Ruta Nac. N° 40, Km. 4347,4 <br />Cafayate, Salta - Argentina
            </Link>
          </div>
          <div className='flex flex-col gap-2 space-y-2'>
            <h3 className="font-semibold">{f("follow")}</h3>
            <div className='flex items-center gap-2'>
              <Link href="https://www.instagram.com/burbujasdealtura/" target='_blank' className='rounded-full bg-[#773c4d] p-2'>
                <LuInstagram className='size-4 sm:size-5' />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100064148794896" target='_blank' className='rounded-full bg-[#773c4d] p-2'>
                <FaFacebookF className='size-4 sm:size-5' />
              </Link>
              <Link href="https://www.burbujasdealtura.com.ar/" target='_blank' className='rounded-full bg-[#773c4d] p-2'>
                <LuEarth className='size-4 sm:size-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
