import { Subline } from '@/interfaces';

// Mapeo linea -> sublineas. El orden determina que entrada de INFO_LINES describe cada sublinea.
export const SUBLINES_BY_LINE: Record<string, Subline[]> = {
  espumantes: [Subline.burbujas, Subline.pet],
  tinquiao: [Subline.tinquiao, Subline.blend],
  vikinga: [Subline.vinland, Subline.drakkar],
};
