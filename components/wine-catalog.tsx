"use client"

import { useState } from "react"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { newWineData } from "@/mock";
import { Lines, NewWine, Subline } from "@/interfaces";
import { WineModal } from "./wine-modal"
import { TECHNICAL_INFO } from '../mock/new-wine-data';
import { SublineSection } from "./molecules";
import { TablePricesFob } from "./table-prices-fob";
import { Separator } from "./ui/separator";

interface Props {
  line: Lines | undefined;
  subline?: Subline[] | undefined
}
const labelLine: Record<string, string> = {
  tinquiao: "Tinquiao",
  espumantes: "Espumantes",
  vikinga: "Vikingos"
}
export function WineCatalog({ line, subline }: Props) {
  const [selectedWine, setSelectedWine] = useState<NewWine | null>(null);
  const t = useTranslations('fobTable');
  const l = useTranslations("catalog");
  const n = useTranslations('notesFob');
  const an = useTranslations('aditionalNote');

  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex justify-end">
          <Link href='/' className="flex gap-4 items-center text-center hover:shadow p-2 rounded-lg"><FaChevronLeft size={12} />Home</Link>
        </div>
        <div className="relative w-full my-8 flex items-center justify-center">
          <div className="hidden md:block absolute top-1/2 w-full border-t border-tercery"></div>
          <span className="bg-primary-foreground md:px-10 font-medium uppercase z-10 text-3xl">{line ? `${l("wine")} ${labelLine[line]}` : l("allLines")}</span>
        </div>
        <SublineSection
          line={line}
          subline={subline}
          wineData={newWineData}
          onWineSelect={(value) => setSelectedWine(value)}
        />
        {subline && subline.length > 0 && (
          <div className="w-full mx-auto flex flex-col gap-4">
            <h2 className="mt-8 text-center text-xl lg:text-2xl">{t('title')}</h2>
            <h3 className="capitalize text-center text-lg lg:text-xl">{subline[0]}</h3>
            <TablePricesFob subline={subline[0]} />
          </div>
        )}
        {
          subline && subline.length > 1 && (
            <div className="w-full mx-auto flex flex-col gap-4">
              <h3 className="capitalize text-center text-lg lg:text-xl">{subline[1]}</h3>
              <TablePricesFob subline={subline[1]} />
            </div>
          )
        }
        {
          line && (
            <>
              <div className="col-span-full mt-10 mb-4 space-y-2">
                <div className="flex flex-col lg:items-center lg:flex-row gap-2 text-xs md:text-sm justify-center">
                  <p className="font-medium">{n("notes")}:</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">{n("casesCount")}:</span>{TECHNICAL_INFO[line].main_note.bottles_per_box}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">{n("palletCount")}:</span>{TECHNICAL_INFO[line].main_note.box_per_pallet}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">{n("palletDimensions")}:</span>{TECHNICAL_INFO[line].main_note.pallet_measurements}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">{n("totalWeight")}:</span>{TECHNICAL_INFO[line].main_note.total_weight}</p>
                </div>
              </div>
              <div className="col-span-full mb-4 space-y-2">
                <div className="flex flex-col lg:items-center lg:flex-row justify-center text-xs md:text-sm gap-2">
                  <p className="font-medium">{n("internalNotes")}:</p>
                  <p><span className="font-semibold mr-1">{TECHNICAL_INFO[line].internal_note.name}:</span>{TECHNICAL_INFO[line].internal_note.measures}</p>
                </div>
              </div>
              <div className="my-10 col-span-full flex flex-col lg:flex-row justify-around items-start mb-4 space-y-2 border border-slate-200 bg-slate-100 rounded-lg p-4 md:p-6">
                <div className="flex flex-col text-muted-foreground lg:items-start text-xs lg:text-sm gap-2">
                  <p>{an("fobPrice")}</p>
                  <p>{an("taxExemption")}</p>
                  <p>{an("paymentCurrency")}</p>
                  <p>{an("destinationBank")}</p>
                </div>
                <div className="flex flex-col text-muted-foreground lg:items-start text-xs lg:text-sm gap-2">
                  <p>{an("beneficiary")}</p>
                  <p>{an("advancePayment")}</p>
                  <p>{an("palletSizes")}</p>
                </div>
              </div>
            </>
          )
        }
      </div>
      <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </div>
  )
}
