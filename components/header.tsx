import { TitleComponent } from './title-component'

export const Header = () => {
  return (
    <div className="bg-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <TitleComponent title="Burbujas de Altura" />
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra selección exclusiva de vinos cuidadosamente elaborados para los paladares más exigentes
          </p>
        </div>
      </div>
    </div>
  )
}
