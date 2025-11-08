"use client"

import type { Wine } from "@/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"

interface WineModalProps {
  wine: Wine | null
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

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[3/4] md:aspect-auto bg-secondary">
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
                    <span className="text-muted-foreground text-sm">Región</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.technicalSheet.region}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Graduación</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.technicalSheet.alcohol}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Temperatura</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.technicalSheet.temperature}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">Crianza</span>
                    <span className="font-medium text-card-foreground text-sm">{wine.technicalSheet.aging}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Maridaje Sugerido</h3>
                <p className="text-card-foreground/90 text-sm leading-relaxed">{wine.technicalSheet.pairing}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
