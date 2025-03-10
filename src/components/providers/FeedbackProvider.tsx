"use client";

import { ReactNode, useState } from "react";

import { FeedbackContext, OpenFeedbackProps } from "@/core/contexts/FeedbackContext";

import { Overlay, style } from "../base/feedback/overlay";

type Position = keyof typeof style.variants.position;

type FeedbackProviderProps = { children: ReactNode };

export function FeedbackProvider({ children }: FeedbackProviderProps) {
  const [position, setPosition] = useState<Position>("center");
  const [isEscapable, setEscapable] = useState<boolean>(false);
  const [isTransparent, setTransparent] = useState<boolean>(false);
  const [FeedbackContent, setFeedbackContent] = useState<ReactNode | null>(null);

  function openFeedback({
    content,
    escapable = false,
    newPosition = "center",
    transparent = false,
  }: OpenFeedbackProps) {
    setPosition(newPosition);
    setEscapable(escapable);
    setTransparent(transparent);
    setFeedbackContent(content);
  }

  function closeFeedback() {
    setFeedbackContent(null);
  }

  return (
    <FeedbackContext.Provider value={{ openFeedback, closeFeedback }}>
      {children}

      {FeedbackContent && (
        <Overlay
          position={position}
          onClose={isEscapable ? closeFeedback : () => {}}
          transparent={isTransparent}
        >
          {FeedbackContent}
        </Overlay>
      )}
    </FeedbackContext.Provider>
  );
}
