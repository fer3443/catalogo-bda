"use client"

import { useState } from "react"
import { INFO_LINES, newWineData } from "@/mock";
import { WineCard } from "./wine-card"
import { WineModal } from "./wine-modal"
import { Lines, NewWine, Subline } from "@/interfaces";
import { TECHNICAL_INFO } from '../mock/new-wine-data';

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
  const [selectedWine, setSelectedWine] = useState<NewWine | null>(null)
  const filteredWines = !line ? newWineData : newWineData.filter((wine) => wine.line.toLowerCase() === line);

  const handleFilterWines = (line: Lines | undefined, subline: Subline[] | undefined, index: number = 0): NewWine[] => {
    if (!line) return newWineData;
    if (!subline || subline.length === 0) return newWineData.filter((wine) => wine.line.toLowerCase() === line);
    return newWineData.filter((wine) => wine.line.toLowerCase() === line && wine.subline === subline[index])
  }

  const handleSublineDescription = (line: Lines | undefined, index: number = 0) => {
    if (!line) return null;
    const wineLine = filteredWines[0].line
    if (line === wineLine.toLowerCase()) {
      return INFO_LINES[wineLine][index] || null
    }
  }



  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative w-full my-8 flex items-center justify-center">
          <div className="hidden md:block absolute top-1/2 w-full border-t border-tercery"></div>
          <span className="bg-primary-foreground md:px-10 font-medium uppercase z-10 text-3xl">{line ? `Vinos ${labelLine[line]}` : "Linea completa"}</span>
        </div>
        {
          line && (
            <div className="space-y-2 text-center my-8">
              <h2 className=" text-[#4e4e4e] text-base md:text-xl">
                {handleSublineDescription(line, 0)?.title}
              </h2>
              <p className="text-xs md:text-sm text-[#747474]">{handleSublineDescription(line, 0)?.content}</p>
            </div>
          )
        }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {handleFilterWines(line, subline, 0).map((wine) => (
            <WineCard key={wine.id} wine={wine} onClick={() => setSelectedWine(wine)} />
          ))}
        </div>
        {
          line && subline && subline.length > 1 && (
            <>
              <div className="space-y-2 text-center my-8">
                <h2 className=" text-[#4e4e4e] text-base md:text-xl">
                  {handleSublineDescription(line, 1)?.title}
                </h2>
                <p className="text-xs md:text-sm text-[#747474]">{handleSublineDescription(line, 1)?.content}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {handleFilterWines(line, subline, 1).map((wine) => (
                  <WineCard key={wine.id} wine={wine} onClick={() => setSelectedWine(wine)} />
                ))}
              </div>
            </>
          )
        }
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
