"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { IoEarthSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { LANGUAGES } from "@/constants";

export const LocaleSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("a11y");

  // pathname es la ruta interna (ej. "/lines/[line]"); next-intl la traduce al idioma elegido
  const handleChange = (newLocale: string) => {
    if (!routing.locales.some((l) => l === newLocale)) return;
    const { locale: _locale, ...routeParams } = params;
    router.replace(
      // @ts-expect-error: pathname y params se validan en runtime contra routing.pathnames
      { pathname, params: routeParams },
      { locale: newLocale as (typeof routing.locales)[number] }
    );
  };
  //TODO: cambiar color del selectItem para que coincida con el bg del header
  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        aria-label={t("language")}
        className={clsx(`p-2 h-8 border shadow-none font-medium cursor-pointer`, {
          "w-32": mobile,
          "min-w-auto": !mobile
        })}
      >
        <SelectValue className="p-1" />
      </SelectTrigger>
      <SelectContent className="flex flex-row gap-1 border shadow-none m-0! p-0! bg-[#5B2333]!">
        {
          LANGUAGES.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="flex border-none flex-nowrap gap-1 hover:text-accent"
            >
              <span className="flex flex-nowrap gap-1 items-center justify-center text-white hover:font-semibold transition-all duration-200 cursor-pointer">
                <IoEarthSharp className="h-4 w-4 text-white" />
                {mobile ? lang.label_mobile : lang.label}
              </span>
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  );
};