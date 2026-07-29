"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

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
  const locale = useLocale();

  const handleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.slice(locale.length + 1)}`;
    router.push(newPath);
  };
  //TODO: cambiar color del selectItem para que coincida con el bg del header
  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
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