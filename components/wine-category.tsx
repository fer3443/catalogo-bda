"use client"

import Link from "next/link"
import { LanguageEnum, Lines } from "@/interfaces"
import { WineCardCategory } from "./wine-card-category"
import { DividerText } from "./divider-text"
import { alternativeTitleFont } from "@/config/fonts"
import { useLocale, useTranslations } from "next-intl"
import { handleLabelByLanguage } from "@/utils"

const linesData = [
  { label: "Todas las lineas", path: "/lines", image: "/bda-all-lines.webp" },
  { label: `${Lines.espumantes}`, path: `/lines/${Lines.espumantes.toLowerCase()}`, image: "/bda-espumantes-lines.webp" },
  { label: `${Lines.tinquiao}`, path: `/lines/${Lines.tinquiao.toLowerCase()}`, image: "/bda-tinquiao-line.webp" },
  { label: `${Lines.vikinga}`, path: `/lines/${Lines.vikinga.toLowerCase()}`, image: "/bda-vikingo-line.webp" },
]
export const WineCategory = () => {
  const locale = useLocale() as LanguageEnum;
  const t = useTranslations("Home");
 
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 p-4 mb-10">
      <div className="col-span-full space-y-8 px-1">
        {/* <DividerText text="Burbujas de Altura" /> */}
        <h2 className={`${alternativeTitleFont.className} text-4xl pt-4 text-center md:text-start`}>
          {t("titleDescription")}
        </h2>
        {/* <p className="text-sm md:text-base text-[#747474] max-w-6xl">
          Bodega Familiar Boutique, enamorada del Valle Calchaquí.
          Creadora del Vino Espumante <span className="font-semibold">Burbujas de Altura</span>, acompañando a este proyecto sus diferentes líneas de vinos <span className="font-semibold">Tinquiao, Vinland, Freya, Drakkar, Blends de Crianza</span>.
          Descubra los secretos de nuestras viñas, cómo elaboramos Burbujas y deguste nuestros vinos con <span className="font-semibold">enoturismo</span> personalizado, familiar y con mucha pasíon, que nos caracteriza.
        </p> */}
        <p className="text-sm md:text-base text-[#747474] max-w-6xl">
          {t("homeDescription")}
        </p>
      </div>
      <DividerText text={t("titleDivider")} />
      {
        linesData.map((line, idx) => (
          <Link key={idx} href={line.path}>
            <WineCardCategory text={handleLabelByLanguage(locale, line.label)} image={line.image} />
          </Link>
        ))
      }
    </section>
  )
}