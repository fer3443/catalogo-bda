import Link from "next/link"
import { Lines } from "@/interfaces"
import { WineCardCategory } from "./wine-card-category"
import { DividerText } from "./divider-text"



export const WineCategory = () => {
  const linesData = [
    { label: "Todas las lineas", path: "/lines" },
    { label: `Linea ${Lines.espumantes}`, path: `/lines/${Lines.espumantes.toLowerCase()}` },
    { label: `Linea ${Lines.tinquiao}`, path: `/lines/${Lines.tinquiao.toLowerCase()}` },
    { label: `Linea ${Lines.vikinga}`, path: `/lines/${Lines.vikinga.toLowerCase()}` },
  ]
  //TODO: ver disposicion de tarjetas
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 p-4">
      <div className="col-span-full py-2 px-1">
        {/* <h2 className="text-lg mb-2">
          Primer Champagnera del Norte Argentino.
        </h2> */}
        <DividerText text="Primer Champagnera del Norte Argentino"/>
        <p className="text-sm md:text-lg text-[#747474] max-w-6xl text-center mx-auto">
          Bodega Familiar Boutique, enamorada del Valle Calchaquí.<br />
          Creadora del Vino Espumante BURBUJAS DE ALTURA, acompañando a este proyecto sus diferentes líneas de vinos <span className="italic">TINQUIAO, VINLAND, FREYA, DRAKKAR, Blends de Crianza</span>.
          Descubra los secretos de nuestras viñas, como elaboramos Burbujas y deguste de nuestros vinos con ENOTURISMO personalizado, familiar y profesional
        </p>
      </div>
     <DividerText text="Nuestras líneas"/>
      {
        linesData.map((line, idx) => (
          <Link key={idx} href={line.path}>
            <WineCardCategory text={line.label} />
          </Link>
        ))
      }
    </section>
  )
}
//linea espumante - linea tinquiao - y linea vikinga