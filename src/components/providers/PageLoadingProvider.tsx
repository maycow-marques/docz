"use client";

import nProgress from "nprogress";
import { useEffect, useState } from "react";

import { PageLoadingContext } from "@/core/contexts/PageLoadingContext";
import { usePathname } from "@/i18n/navigation";

nProgress.configure({ showSpinner: false });

export function PageLoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Inicia o carregamento sempre que a rota muda
    setIsLoading(true);
    nProgress.start();

    // Aguarda um pequeno delay para garantir que a página carregou
    const timeout = setTimeout(() => {
      setIsLoading(false);
      nProgress.done();
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <PageLoadingContext.Provider value={{ isLoading }}>{children}</PageLoadingContext.Provider>
  );
}
