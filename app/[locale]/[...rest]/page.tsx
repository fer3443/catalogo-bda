import { notFound } from 'next/navigation';

// Captura cualquier URL sin pagina dentro de /[locale] para mostrar el not-found traducido.
export default function CatchAllPage() {
  notFound();
}
