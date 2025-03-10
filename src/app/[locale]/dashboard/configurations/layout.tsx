import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
import {
  FiBriefcase,
  FiDatabase,
  FiFileText,
  FiGlobe,
  FiGrid,
  FiMapPin,
  FiSettings,
  FiTool,
  FiUsers,
} from "react-icons/fi";

import { Section } from "@/components/base/general/section";
import { Link } from "@/i18n/navigation";
import { Pathnames } from "@/i18n/routing";

type ConfigurationsLayoutProps = {
  children: ReactNode;
};

export default async function ConfigurationsLayout({ children }: ConfigurationsLayoutProps) {
  const t = await getTranslations();

  const items = [
    { icon: <FiUsers />, name: t("navigation.users"), path: "/dashboard/configurations/users" },
    { icon: <FiGrid />, name: t("navigation.groups"), path: "/dashboard/configurations/users" },
    { icon: <FiGlobe />, name: t("navigation.domains"), path: "/dashboard/configurations/users" },
    {
      icon: <FiFileText />,
      name: t("navigation.reports"),
      path: "/dashboard/configurations/users",
    },
    {
      icon: <FiBriefcase />,
      name: t("navigation.departments"),
      path: "/dashboard/configurations/users",
    },
    {
      icon: <FiMapPin />,
      name: t("navigation.locations"),
      path: "/dashboard/configurations/users",
    },
    {
      icon: <FiDatabase />,
      name: t("navigation.auxiliary-tables"),
      path: "/dashboard/configurations/users",
    },
    {
      icon: <FiSettings />,
      name: t("navigation.services"),
      path: "/dashboard/configurations/users",
    },
    {
      icon: <FiTool />,
      name: t("navigation.service-types"),
      path: "/dashboard/configurations/users",
    },
  ] satisfies { icon: ReactNode; name: string; path: Pathnames }[];

  return (
    <div>
      <div className="flex items-start gap-10">
        <div className="flex-1">{children}</div>
        <Section className="w-52 p-5">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.name.toLowerCase().replaceAll(" ", "-")}>
                <Link href={item.path} className="flex items-center gap-2">
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
