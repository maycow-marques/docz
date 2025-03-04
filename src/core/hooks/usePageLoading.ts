import { useContext } from "react";

import { PageLoadingContext } from "../contexts/PageLoadingContext";

export function usePageLoading() {
  const context = useContext(PageLoadingContext);
  if (!context) {
    throw new Error("usePageLoading deve ser usado dentro do PageLoadingProvider");
  }
  return context;
}
