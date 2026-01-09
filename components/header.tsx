import { TitleComponent } from './title-component'

export const Header = () => {
  return (
    <div className="bg-[#5B2333] text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <TitleComponent title="Burbujas de Altura" />
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra selección exclusiva de Vinos y Espumantes, cuidosamente elaborados para el disfrute de la gente.
          </p>
        </div>
      </div>
    </div>
  )
}
