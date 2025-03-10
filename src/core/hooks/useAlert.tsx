import { Alert } from "@/components/base/feedback/alert";

import { useFeedback } from "./useFeedback";

type AlertOptions = {
  title: string;
  message: string;
  severity: "info" | "danger" | "success" | "warning";
};

export function useAlert() {
  const { openFeedback, closeFeedback } = useFeedback();

  function alert({ title, message, severity }: AlertOptions) {
    openFeedback({
      content: (
        <Alert title={title} message={message} severity={severity} onClose={closeFeedback} />
      ),
      newPosition: "top-right",
      escapable: true,
      transparent: true,
    });
  }

  return { alert };
}
