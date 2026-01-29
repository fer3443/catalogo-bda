import { Lines, NewWine, Subline } from '@/interfaces';
import { useSublineData } from '@/hooks';
import { WineCard } from '../wine-card';

interface SublineSectionProps {
  wineData: NewWine[],
  line: Lines | undefined,
  subline: Subline[] | undefined,
  selectedWine?: NewWine | null,
  onWineSelect: (wine: NewWine | null) => void
}

const WineGrid = ({ wines, onWineClick }: { wines: NewWine[]; onWineClick: (wine: NewWine | null) => void }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {wines.map((wine) => (
      <WineCard key={wine.id} wine={wine} onClick={() => onWineClick(wine)} />
    ))}
  </div>
);

export const SublineSection = ({ wineData, line, subline, onWineSelect }: SublineSectionProps) => {
  const { getFilteredWines, getSublineDescription, hasMultipleSublines } = useSublineData(wineData, line, subline);

  return (
    <div>
      <div className="space-y-2 text-center my-8">
        <h2 className="text-[#4e4e4e] text-base md:text-xl">
          {getSublineDescription(0)?.title}
        </h2>
        <p className="text-xs md:text-sm text-[#747474]">{getSublineDescription(0)?.content}</p>
      </div>
      <WineGrid wines={getFilteredWines(0)} onWineClick={onWineSelect} />

      {hasMultipleSublines && (
        <>
          <div className="space-y-2 text-center my-8">
            <h2 className="text-[#4e4e4e] text-base md:text-xl">
              {getSublineDescription(1)?.title}
            </h2>
            <p className="text-xs md:text-sm text-[#747474]">{getSublineDescription(1)?.content}</p>
          </div>
          <WineGrid wines={getFilteredWines(1)} onWineClick={onWineSelect} />
        </>
      )}
    </div>
  )
}
