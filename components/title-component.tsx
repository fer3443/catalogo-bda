import { titleFont } from '@/config/fonts'
import clsx from 'clsx';
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export const TitleComponent = ({ title, subtitle, className }: Props) => {
  return (
    <h1 className={`${titleFont.className} text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance ${className}`}>{title}</h1>
  )
}
