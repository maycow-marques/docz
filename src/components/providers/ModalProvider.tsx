"use client";

import { ReactNode, useState } from "react";

import { ModalContext } from "@/core/contexts/ModalContext";

import { Overlay } from "../ui/Overlay";

type ModalProviderProps = { children: ReactNode };

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  function openModal(content: ReactNode) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modalContent && <Overlay>{modalContent}</Overlay>}
    </ModalContext.Provider>
  );
}
