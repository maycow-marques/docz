"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { tv } from "tailwind-variants";

import { Menu, MenuItem } from "@/components/base/navigation/menu";
import { Link } from "@/i18n/navigation";
import zFromDocz from "@/public/logo-condensed.png";
import Docz from "@/public/logo.png";

type DashboardSidebarProps = {
  isCompressed?: boolean;
};

export function DashboardSidebar({ isCompressed = false }: DashboardSidebarProps) {
  const t = useTranslations();
  const [showCompressedContent, setShowCompressedContent] = useState<boolean>(isCompressed);

  return (
    <motion.aside
      animate={{ width: isCompressed ? 80 : 240 }}
      className={style({ isCompressed: showCompressedContent })}
      onAnimationComplete={() => setShowCompressedContent(isCompressed)}
    >
      <div>
        {/* Header do Sidebar */}
        <div className="flex items-center justify-center">
          <Link href="/dashboard">
            <Image
              src={showCompressedContent ? zFromDocz : Docz}
              className="h-[1.8rem] w-auto"
              alt="Docz"
            />
          </Link>
        </div>

        {/* Menu Principal */}
        <nav className="border-surface-divisor-200 mt-4 space-y-1 border-y py-5">
          <ul>
            <MenuItem
              href="/dashboard"
              title={t("navigation.home")}
              icon="PiHouseDuotone"
              isCompressed={showCompressedContent}
            />
            <MenuItem
              href="/dashboard/reports"
              title={t("navigation.reports")}
              icon="PiChartBarDuotone"
              isCompressed={showCompressedContent}
            />
            <MenuItem
              href="/dashboard"
              title={t("navigation.requests")}
              icon="PiBoxArrowUpDuotone"
              isCompressed={showCompressedContent}
            />
            <MenuItem
              href="/dashboard"
              title={t("navigation.projects")}
              icon="PiFoldersDuotone"
              isCompressed={showCompressedContent}
            />
            <MenuItem
              href="/dashboard/configurations/users"
              title={t("navigation.configurations")}
              icon="PiSlidersHorizontalDuotone"
              isCompressed={showCompressedContent}
            />
          </ul>
        </nav>
      </div>

      {/* Menu Secundário */}
      <Menu>
        <MenuItem
          href="/"
          icon="PiBookOpenDuotone"
          title={t("navigation.manual")}
          isCompressed={showCompressedContent}
        />
        <MenuItem
          href="/"
          icon="PiNotePencilDuotone"
          title={t("navigation.release-notes")}
          isCompressed={showCompressedContent}
        />
      </Menu>
    </motion.aside>
  );
}

const style = tv({
  base: "bg-sidebar-backgroud dark:bg-surface-200 fixed top-0 left-0 flex h-screen flex-col justify-between gap-2 p-5 transition-all",
  variants: {
    isCompressed: {
      true: "w-[80px]",
      false: "w-[240px]",
    },
  },
});
