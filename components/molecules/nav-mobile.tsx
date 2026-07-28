"use client"

import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineLocationOn } from "react-icons/md";
import { LocaleSwitcher } from '../localeswitcher'

export const NavMobile = () => {
  return (
    <nav className='w-full space-y-4 mb-2'>
      <div className='bg-[#3f1b26] flex flex-col gap-4 items-center py-6'>

        <Link
          className='text-xs font-light text-secondary hover:text-white hover:font-medium inline-flex gap-1'
          href='https://www.google.com/maps/place/Bodega+Burbujas+de+Altura/@-26.0355294,-65.9807108,111m/data=!3m1!1e3!4m6!3m5!1s0x941f31cb8c95b503:0xfa032e61ca1bf6cc!8m2!3d-26.0354957!4d-65.9804077!16s%2Fg%2F11gxrcfj37?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D'
          target='_blank'
          rel="noopener noreferrer"
        >
          <MdOutlineLocationOn className='size-4'/>
          Cafayate, Salta - Argentina
        </Link>
        <Link
          href="mailto:info@burbujasdealtura.com.ar"
          className="text-xs text-secondary hover:text-white font-light flex justify-center items-center gap-2  text-nowrap hover:font-medium px-1 duration-200"
        >
          info@burbujasdealtura.com.ar
        </Link>
      </div>
      <div className='flex justify-between px-4'>
        <Image
          src='/bandera-argentina.png'
          alt="Bandera Argentina"
          title="Argentina"
          width={40}
          height={40}
          className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
        />
        <div className="max-w-20">
          <LocaleSwitcher mobile/>
        </div>
      </div>
    </nav>
  )
}
