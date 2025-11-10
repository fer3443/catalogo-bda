import Link from "next/link"
import { Lines } from "@/interfaces"
import { WineCardCategory } from "./wine-card-category"
import { DividerText } from "./divider-text"
import { titleFont } from "@/config/fonts"



export const WineCategory = () => {
  const linesData = [
    { label: "Todas las lineas", path: "/lines", image:"/bda-all-lines.webp" },
    { label: `Linea ${Lines.espumantes}`, path: `/lines/${Lines.espumantes.toLowerCase()}`, image:"/bda-espumantes-lines.webp" },
    { label: `Linea ${Lines.tinquiao}`, path: `/lines/${Lines.tinquiao.toLowerCase()}` },
    { label: `Linea ${Lines.vikinga}`, path: `/lines/${Lines.vikinga.toLowerCase()}` },
  ]
  //TODO: ver disposicion de tarjetas
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 p-4">
      <div className="col-span-full space-y-8 px-1">
        <DividerText text="Burbujas de Altura"/>
        <h2 className={`${titleFont.className} text-4xl pt-4 text-center md:text-start`}>
          Primer Champagnera del Norte Argentino.
        </h2>
        <p className="text-sm md:text-base text-[#747474] max-w-6xl">
          Bodega Familiar Boutique, enamorada del Valle Calchaquí.
          Creadora del Vino Espumante BURBUJAS DE ALTURA, acompañando a este proyecto sus diferentes líneas de vinos <span className="italic">TINQUIAO, VINLAND, FREYA, DRAKKAR, Blends de Crianza</span>.
          Descubra los secretos de nuestras viñas, como elaboramos Burbujas y deguste de nuestros vinos con ENOTURISMO personalizado, familiar y profesional
        </p>
      </div>
     <DividerText text="Nuestras líneas"/>
      {
        linesData.map((line, idx) => (
          <Link key={idx} href={line.path}>
            <WineCardCategory text={line.label} image={line.image} />
          </Link>
        ))
      }
    </section>
  )
}
//linea espumante - linea tinquiao - y linea vikinga