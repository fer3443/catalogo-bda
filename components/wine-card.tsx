"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { NewWine } from "@/interfaces"

interface WineCardProps {
  wine: NewWine
  onClick: () => void
}

export function WineCard({ wine, onClick }: WineCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card py-0"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-secondary">
        <Image
          src={wine.image || "/placeholder.svg"}
          alt={wine.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
            {wine.line}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold mb-2 text-card-foreground group-hover:text-accent transition-colors">
          {wine.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{wine.variety}</p>
        <p className="text-sm text-card-foreground/80 leading-relaxed line-clamp-3">{wine.description}</p>
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs text-accent font-medium uppercase tracking-wider">Ver ficha técnica →</span>
        </div>
      </div>
    </Card>
  )
}
