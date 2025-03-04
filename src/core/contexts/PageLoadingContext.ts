import { createContext } from "react";

type PageLoadingContextProps = {
  isLoading: boolean;
};

export const PageLoadingContext = createContext<PageLoadingContextProps | undefined>(undefined);
