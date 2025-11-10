"use client"

import { useState } from "react"
import { WineCard } from "./wine-card"
import { WineModal } from "./wine-modal"
import { newWineData } from "@/lib/"
import { Lines, Wine, NewWine } from "@/interfaces";
import { titleFont } from "@/config/fonts"

interface Props {
  line: Lines | undefined;
}

export function WineCatalog({ line }: Props) {
  const [selectedWine, setSelectedWine] = useState<NewWine | null>(null)
  const filteredWines = !line ? newWineData : newWineData.filter((wine) => wine.line.toLowerCase() === line)
  const labelLine: Record<string, string> = {
    tinquiao: "Tinquiao",
    espumantes: "Espumantes",
    vikinga: "Vikingos"
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-12">

        <div className="relative w-full my-8 flex items-center justify-center">
          <div className="hidden md:block absolute top-1/2 w-full border-t border-tercery"></div>
          <span className="bg-primary-foreground md:px-10 font-medium uppercase z-10 text-3xl">{line ? `Vinos ${labelLine[line]}` : "Linea completa"}</span>
        </div>
        {
          line === Lines.vikinga.toLowerCase() && (<h3 className={`my-8 md:text-center text-[#747474] text-base md:text-xl`}>
            Creamos una línea vikinga como un mix de culturas, entre Noruega y Cafayate.
          </h3>)
        }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} onClick={() => setSelectedWine(wine)} />
          ))}
        </div>
      </div>

      <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </div>
  )
}
