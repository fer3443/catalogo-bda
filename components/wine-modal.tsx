"use client"

import Image from "next/image"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { NewWine } from "@/interfaces"

interface WineModalProps {
  wine: NewWine | null
  onClose: () => void
}

export function WineModal({ wine, onClose }: WineModalProps) {
  if (!wine) return null

  return (
    <Dialog open={!!wine} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0">
          <div className="relative aspect-3/4 bg-secondary">
            <Image src={wine.image || "/placeholder.svg"} alt={wine.name} fill className="object-cover" />
          </div>

          <div className="p-8 md:p-10">
            <DialogHeader>
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full mb-4">
                  Línea {wine.line}
                </span>
              </div>

              <DialogTitle className="font-serif text-3xl md:text-4xl font-semibold mb-2 text-card-foreground text-balance">
                {wine.name}
              </DialogTitle>
              <p className="text-base text-muted-foreground font-medium">{wine.variety}</p>
            </DialogHeader>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Descripción</h3>
                <p className="text-card-foreground/90 leading-relaxed">{wine.description}</p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Ficha Técnica</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Origen</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{wine.origin}</span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Altura de los viñedos</span>
                    <span className="font-medium text-card-foreground text-sm md:text-end">{wine.vineyardHeight.toLowerCase()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Edad de los viñedos</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{wine.vineyardAge.toLowerCase()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Alcohol</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{wine.alcohol}</span>
                  </div>
                  {wine.suggar && (
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground text-sm">Azúcar</span>
                      <span className="font-medium text-card-foreground text-sm text-end">{wine.suggar}</span>
                    </div>
                  )
                  }
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Temperatura de servicio</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{wine.temperature}</span>
                  </div>
                  {
                    wine.timeOnLees && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm">Tiempo sobre lías</span>
                        <span className="font-medium text-card-foreground text-sm text-end">{wine.timeOnLees}</span>
                      </div>
                    )
                  }
                  <div className="flex flex-col md:flex-row justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Conservar</span>
                    <span className="font-medium text-card-foreground text-sm md:text-end">{wine.conservation}</span>
                  </div>
                  <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Fecha de cosecha</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.harvestDate.toLowerCase()}</span>
                  </div>
                  {
                    wine.storedInCellar && (
                      <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm">Guarda en bodega</span>
                        <span className="font-medium text-card-foreground text-sm">{wine.storedInCellar.toLowerCase()}</span>
                      </div>
                    )
                  }
                  <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Elaboración</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.elaboration}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Maridaje Sugerido</h3>
                <p className="text-card-foreground/90 text-sm leading-relaxed">{wine.pairing}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
