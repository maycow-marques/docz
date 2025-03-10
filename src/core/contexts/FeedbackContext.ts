import { createContext, ReactNode } from "react";

import { OverlayPositions } from "@/components/base/feedback/overlay";

export type OpenFeedbackProps = {
  content: ReactNode;
  escapable?: boolean;
  newPosition?: OverlayPositions;
  transparent?: boolean;
};

interface FeedbackContextProps {
  openFeedback: (props: OpenFeedbackProps) => void;
  closeFeedback: () => void;
}

export const FeedbackContext = createContext<FeedbackContextProps | undefined>(undefined);
