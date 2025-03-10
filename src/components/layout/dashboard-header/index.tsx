"use client";

import NextLink from "next/link";
import { FaBars } from "react-icons/fa6";

import { Icon } from "@/components/base/general/icon";
import { Section } from "@/components/base/general/section";
import { ThemeToggle } from "@/components/base/general/theme-toggle";
import { Dropdown } from "@/components/base/navigation/dropdown";
import { LocaleDropdown } from "@/components/base/navigation/locale-dropdown";

type DashboardHeaderProps = { toggle: () => void };

export function DashboardHeader({ toggle }: DashboardHeaderProps) {
  return (
    <Section className="flex items-center justify-between border-transparent py-4 shadow" square>
      <div className="flex flex-1 items-center justify-between px-10">
        <button onClick={toggle} className="cursor-pointer">
          <FaBars />
        </button>

        <div className="flex items-center gap-3">
          <Dropdown
            direction="bottom-right"
            className=" hover:bg-muted/10 cursor-pointer rounded-md border border-transparent"
            label={
              <Icon
                size={20}
                name="PiCirclesFourDuotone"
                className="text-muted hover:text-primary-100"
              />
            }
          >
            <span className="grid w-60 grid-cols-2 gap-2 p-3">
              <NextLink
                href="https://docz.sosdocs.com.br/Downloads/etiqPress/setup.exe"
                target="_blank"
                download
                className="text-muted hover:text-primary-100 flex flex-col items-center justify-center text-sm"
              >
                <Icon name="PiPrinterDuotone" /> EtiqPress
              </NextLink>
              <NextLink
                href="https://docz.sosdocs.com.br/Downloads/e-assinador/setup.exe"
                target="_blank"
                download
                className="text-muted hover:text-primary-100 flex flex-col items-center justify-center text-sm"
              >
                <Icon name="PiSignatureDuotone" /> E-Assinador
              </NextLink>
            </span>
          </Dropdown>

          <ThemeToggle />

          <LocaleDropdown path="/dashboard" />
        </div>
      </div>
    </Section>
  );
}
