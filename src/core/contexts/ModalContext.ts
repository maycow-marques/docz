import { createContext, ReactNode } from "react";

interface ModalContextProps {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
