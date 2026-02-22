import Image from "next/image"
import { LocaleSwitcher } from "../localeswitcher"
import Link from "next/link"

export const NavDesktop = () => {
  return (
    <nav className="bg-[#3f1b26] w-full py-2 px-6 flex justify-between items-center mb-4">
      <div className="flex gap-4 items-center">
        <Link
          className='text-base font-light hover:text-secondary'
          href='https://www.google.com/maps/place/Bodega+Burbujas+de+Altura/@-26.0355294,-65.9807108,111m/data=!3m1!1e3!4m6!3m5!1s0x941f31cb8c95b503:0xfa032e61ca1bf6cc!8m2!3d-26.0354957!4d-65.9804077!16s%2Fg%2F11gxrcfj37?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D'
          target='_blank'
          rel="noopener noreferrer"
        >
          Ruta Nac. N° 40, Km. 4347,4 Cafayate, Salta - Argentina
        </Link>
        <span> - </span>
        <Link
          href="mailto:info@burbujasdealtura.com.ar"
          className="text-base font-light flex justify-center items-center gap-2  text-nowrap hover:font-medium px-1 duration-200"
        >
          info@burbujasdealtura.com.ar
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src='/bandera-argentina.png'
          alt="Bandera Argentina"
          title="Argentina"
          width={34}
          height={34}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
        />
        <div className="max-w-20">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
