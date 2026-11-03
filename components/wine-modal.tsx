"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { getAge } from "@/utils"
import type { TranslatedWine } from "@/utils/translate-wine"

interface WineModalProps {
  wine: TranslatedWine | null
  onClose: () => void
}

export function WineModal({ wine, onClose }: WineModalProps) {
  const t = useTranslations('wineModal');
  if (!wine) return null
  const translatedWine = wine;

  return (
    <Dialog open={!!wine} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
          aria-label={t("close")}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0">
          <div className="relative aspect-3/4 bg-secondary">
            <Image src={translatedWine.image || "/placeholder.svg"} alt={translatedWine.name} fill sizes="(min-width: 768px) 56rem, 100vw" className="object-cover" />
          </div>

          <div className="p-8 md:p-10">
            <DialogHeader>
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full mb-4">
                  {t("line")} {translatedWine.line}
                </span>
              </div>

              <DialogTitle className="font-serif text-3xl md:text-4xl font-semibold mb-2 text-card-foreground text-balance">
                {translatedWine.name}
              </DialogTitle>
              <DialogDescription className="sr-only">{translatedWine.variety}</DialogDescription>
              <p className="text-base text-muted-foreground font-medium">{translatedWine.variety}</p>
            </DialogHeader>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">{t("description")}</h3>
                <p className="text-card-foreground/90 leading-relaxed">{translatedWine.description}</p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">{t("technicalSheet")}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("origin")}</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{translatedWine.origin}</span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("vineyardAltitude")}</span>
                    <span className="font-medium text-card-foreground text-sm md:text-end">{translatedWine.vineyardHeight.toLowerCase()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("age")}</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{getAge(translatedWine.vineyardAge) + " " + t("ageUnit")}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("alcohol")}</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{translatedWine.alcohol}</span>
                  </div>
                  {translatedWine.suggar && (
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground text-sm">{t("suggar")}</span>
                      <span className="font-medium text-card-foreground text-sm text-end">{translatedWine.suggar}</span>
                    </div>
                  )
                  }
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("serviceTemp")}</span>
                    <span className="font-medium text-card-foreground text-sm text-end">{translatedWine.temperature}</span>
                  </div>
                  {
                    translatedWine.timeOnLees && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm">{t("timeOnLees")}</span>
                        <span className="font-medium text-card-foreground text-sm text-end">{translatedWine.timeOnLees}</span>
                      </div>
                    )
                  }
                  <div className="flex flex-col md:flex-row justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("conservation")}</span>
                    <span className="font-medium text-card-foreground text-sm md:text-end">{translatedWine.conservation}</span>
                  </div>
                  <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("harvestDate")}</span>
                    <span className="font-medium text-card-foreground text-sm">{translatedWine.harvestDate.toLowerCase()}</span>
                  </div>
                  {
                    translatedWine.storedInCellar && (
                      <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm">{t("cellarAging")}</span>
                        <span className="font-medium text-card-foreground text-sm">{translatedWine.storedInCellar.toLowerCase()}</span>
                      </div>
                    )
                  }
                  <div className="flex flex-col justify-between gap-y-2 py-2 border-b border-border/50">
                    <span className="text-muted-foreground text-sm">{t("winemaking")}</span>
                    <span className="font-medium text-card-foreground text-sm">{translatedWine.elaboration}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">{t("pairing")}</h3>
                <p className="text-card-foreground/90 text-sm leading-relaxed">{translatedWine.pairing}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
