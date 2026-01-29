"use client"

import { useState } from "react"
import { newWineData } from "@/mock";
import { WineModal } from "./wine-modal"
import { Lines, NewWine, Subline } from "@/interfaces";
import { TECHNICAL_INFO } from '../mock/new-wine-data';
import { SublineSection } from "./molecules";

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
  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative w-full my-8 flex items-center justify-center">
          <div className="hidden md:block absolute top-1/2 w-full border-t border-tercery"></div>
          <span className="bg-primary-foreground md:px-10 font-medium uppercase z-10 text-3xl">{line ? `Vinos ${labelLine[line]}` : "Linea completa"}</span>
        </div>
        <SublineSection
          line={line}
          subline={subline}
          wineData={newWineData}
          onWineSelect={(value) => setSelectedWine(value)}
        />
        {
          line && (
            <>
              <div className="col-span-full mt-10 mb-4 space-y-2">
                <div className="flex flex-col lg:items-center lg:flex-row gap-2 text-xs md:text-sm justify-center">
                  <p className="font-medium">Notas:</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">Cantidad de botellas por caja:</span>{TECHNICAL_INFO[line].main_note.bottles_per_box}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">Cantidad de cajas por pallet:</span>{TECHNICAL_INFO[line].main_note.box_per_pallet}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">Medida de pallet:</span>{TECHNICAL_INFO[line].main_note.pallet_measurements}</p>
                  <p className="flex items-center gap-1"><span className="font-semibold">Peso total:</span>{TECHNICAL_INFO[line].main_note.total_weight}</p>
                </div>
              </div>
              <div className="col-span-full mb-4 space-y-2">
                <div className="flex flex-col lg:items-center lg:flex-row justify-center text-xs md:text-sm gap-2">
                  <p className="font-medium">Notas internas:</p>
                  <p><span className="font-semibold mr-1">{TECHNICAL_INFO[line].internal_note.name}:</span>{TECHNICAL_INFO[line].internal_note.measures}</p>
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
