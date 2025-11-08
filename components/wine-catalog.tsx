"use client"

import { useState } from "react"
import { WineCard } from "./wine-card"
import { WineModal } from "./wine-modal"
import type { Wine } from "@/lib/types"
import { wineData } from "@/lib/wine-data"

export function WineCatalog() {
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = ["all", "Tinquiao", "Espumantes", "Vinland"]

  const filteredWines = activeCategory === "all" ? wineData : wineData.filter((wine) => wine.line === activeCategory)

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-balance">
              Colección Premium
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra selección exclusiva de vinos cuidadosamente elaborados para los paladares más exigentes
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category === "all" ? "Todas las Líneas" : `Línea ${category}`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} onClick={() => setSelectedWine(wine)} />
          ))}
        </div>
      </div>

      <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </>
  )
}
