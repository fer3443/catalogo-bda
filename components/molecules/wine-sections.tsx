"use client"

import { useState } from "react"
import type { TranslatedWine } from "@/utils/translate-wine"
import { WineCard } from "../wine-card"
import { WineModal } from "../wine-modal"

export interface WineSection {
  title?: string
  content?: string
  wines: TranslatedWine[]
}

/**
 * Parte interactiva del catalogo: grillas de vinos y modal de ficha tecnica.
 * Recibe los vinos ya filtrados y traducidos desde el servidor.
 */
export function WineSections({ sections }: { sections: WineSection[] }) {
  const [selectedWine, setSelectedWine] = useState<TranslatedWine | null>(null)

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <div className="space-y-2 text-center my-8">
            <h2 className="text-[#4e4e4e] text-base md:text-xl">{section.title}</h2>
            <p className="text-xs md:text-sm text-[#747474]">{section.content}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {section.wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} onClick={() => setSelectedWine(wine)} />
            ))}
          </div>
        </div>
      ))}
      <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </div>
  )
}
