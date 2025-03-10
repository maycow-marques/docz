"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { FiFolder, FiGlobe, FiSettings } from "react-icons/fi";

import { Section } from "@/components/base/general/section";
import { Link } from "@/i18n/navigation";
import { Pathnames } from "@/i18n/routing";

export default function Dashboard() {
  const t = useTranslations();

  const quickAccessItems = [
    {
      title: t("pages.dashboard.home.sections.document_management.title"),
      icon: <FiFolder size={20} />,
      actions: [
        { label: t("navigation.archive-document"), href: "/" },
        { label: t("navigation.register-main-container"), href: "/" },
        { label: t("navigation.calculate-storage-period"), href: "/" },
        { label: t("navigation.distribute-indexing"), href: "/" },
        { label: t("navigation.status-management"), href: "/" },
        { label: t("navigation.manage-digitization"), href: "/" },
        { label: t("navigation.indexing-step-project"), href: "/" },
        { label: t("navigation.document-file-types"), href: "/" },
        { label: t("navigation.temporality-table"), href: "/" },
      ],
    },
    {
      title: t("pages.dashboard.home.sections.storage_management.title"),
      icon: <FiGlobe size={20} />,
      actions: [
        { label: t("navigation.archive-in-container"), href: "/" },
        { label: t("navigation.confirm-os-token"), href: "/" },
        { label: t("navigation.aps-inventory"), href: "/" },
        { label: t("navigation.warehouse-management"), href: "/" },
        {
          label: t("navigation.client-identifier-management"),
          href: "/",
        },
        { label: t("navigation.vehicle-management"), href: "/" },
        { label: t("navigation.manage-archiving"), href: "/" },
        { label: t("navigation.archiving-log"), href: "/" },
        { label: t("navigation.search-object-location"), href: "/" },
        { label: t("navigation.requests-panel"), href: "/" },
        { label: t("navigation.object-type"), href: "/" },
        { label: t("navigation.client-request-type"), href: "/" },
        { label: t("navigation.view-warehouse-map"), href: "/" },
      ],
    },
    {
      title: t("pages.dashboard.home.sections.operations_management.title"),
      icon: <FiSettings size={20} />,
      actions: [
        { label: t("navigation.audit-trail"), href: "/" },
        { label: t("navigation.manage-reprints"), href: "/" },
      ],
    },
  ] satisfies { title: string; icon: ReactNode; actions: { label: string; href: Pathnames }[] }[];

  return (
    <div>
      <h1 className="text-3xl font-semibold">{t("pages.dashboard.home.title")}</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {quickAccessItems.map((item, index) => (
          <Section key={index} className="p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center gap-3">
              <span className="bg-info-100 text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full">
                {item.icon}
              </span>
              <p className="text-lg leading-5 font-semibold">{item.title}</p>
            </div>

            <ul className="relative mt-3 space-y-1">
              <span className="border-surface-divisor-300 absolute -top-2 bottom-2 left-4 w-0 border-2 border-t-transparent border-r-transparent"></span>
              {item.actions.map((action, idx) => (
                <li key={idx} className="text-muted flex items-start gap-2 pl-4 text-sm">
                  <span className="border-surface-divisor-300 inline-flex h-3 w-3 rounded border-2  border-t-transparent border-r-transparent"></span>
                  <Link
                    href={action.href}
                    className="hover:text-foreground block cursor-pointer transition-colors"
                  >
                    {action.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </div>
  );
}
