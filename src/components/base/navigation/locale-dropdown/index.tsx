"use client";

import { useParams } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { langs, locales, Pathnames } from "@/i18n/routing";

import { Dropdown, DropdownItem } from "../dropdown";

type LocaleDropdown = { path: Pathnames };

export function LocaleDropdown({ path }: LocaleDropdown) {
  const { locale } = useParams<{ locale: (typeof locales)[number] }>();

  return (
    <Dropdown
      className="hover:bg-muted/10"
      label={<span className={`fi fi-${langs[locale].flag}`} />}
      direction="bottom-right"
    >
      <DropdownItem>
        <Link className="flex items-center gap-2" href={path} locale="pt">
          <span className="fi fi-br"></span> Português
        </Link>
      </DropdownItem>
      <DropdownItem>
        <Link className="flex items-center gap-2" href={path} locale="en">
          <span className="fi fi-us"></span> English
        </Link>
      </DropdownItem>
      <DropdownItem>
        <Link className="flex items-center gap-2" href={path} locale="es">
          <span className="fi fi-py"></span> Espanhõl
        </Link>
      </DropdownItem>
    </Dropdown>
  );
}
