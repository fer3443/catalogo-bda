import Image from "next/image"
import { LocaleSwitcher } from "./localeswitcher"

export const NavDesktop = () => {
  return (
    <nav className="w-full flex items-center justify-end gap-4 mb-4 md:mb-0">
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
    </nav>
  )
}
