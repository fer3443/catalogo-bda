import Image from 'next/image'
import { Card } from './ui/card'
import { titleFont } from '@/config/fonts'

export const WineCardCategory = ({ text }: { text: string }) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-border rounded-lg p-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={"/placeholder.svg"}
          alt={text}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-linear-65 from-[#2B1C1C] to-transparent flex flex-col justify-center">
          <span className={`${titleFont.className} text-3xl inline-block text-white px-3 py-1 font-semibold`}>
            {text}
          </span>
        </div>
      </div>
    </Card>
  )
}
