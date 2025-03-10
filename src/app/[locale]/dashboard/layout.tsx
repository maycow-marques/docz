"use client";

import "react-loading-skeleton/dist/skeleton.css";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

import { ContactAction, Contacts } from "@/components/base/navigation/contacts";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

type DashboardLayoutProps = { children: ReactNode };

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarCompressed, setSidebarCompressed] = useState<boolean>(false);

  const toggle = () => setSidebarCompressed((prev) => !prev);

  return (
    <>
      <Contacts>
        <ContactAction action="bitrix" />
        <ContactAction action="email" />
        <ContactAction action="phone" />
        <ContactAction action="whatsapp" />
      </Contacts>

      <div className="flex">
        {/* Sidebar com animação */}
        <DashboardSidebar isCompressed={isSidebarCompressed} />

        {/* Conteúdo principal animado */}
        <motion.div
          animate={{ marginLeft: isSidebarCompressed ? 80 : 240 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 transition-all"
        >
          <DashboardHeader toggle={toggle} />
          <main className="p-10">{children}</main>
        </motion.div>
      </div>
    </>
  );
}
