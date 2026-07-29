"use client"

import Link from "next/link"
import { LanguageEnum, Lines } from "@/interfaces"
import { WineCardCategory } from "./wine-card-category"
import { DividerText } from "./divider-text"
import { alternativeTitleFont } from "@/config/fonts"
import { useLocale, useTranslations } from "next-intl"
import { handleLabelByLanguage } from "@/utils"
import { LINES_DATA } from "@/mock"

export const WineCategory = () => {
  const locale = useLocale() as LanguageEnum;
  const t = useTranslations("Home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 p-4 lg:px-8 mb-10">
      <div className="col-span-full space-y-8 px-1">
        <h2 className={`${alternativeTitleFont.className} text-4xl pt-4 text-center md:text-start`}>
          {t("titleDescription")}
        </h2>
        <p className="text-sm md:text-base text-[#747474] max-w-6xl">
          {t("homeDescription")}
        </p>
      </div>
      <DividerText text={t("titleDivider")} />
      {
        Object.entries(LINES_DATA).map(([key, line]) => (
          <Link key={key} href={line.path}>
            <WineCardCategory text={handleLabelByLanguage(locale, line.label)} image={line.image} />
          </Link>
        ))
      }
    </section>
  )
}