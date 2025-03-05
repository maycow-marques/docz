"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PiCheckCircle, PiInfo, PiWarning, PiX, PiXCircle } from "react-icons/pi";
import { tv } from "tailwind-variants";

import { Button } from "../Button";

type AlertProps = {
  onClose: () => void;
  title: string;
  message: string;
  severity: keyof typeof style.variants.severity;
};

const icons = {
  info: <PiInfo size={48} className="text-blue-600" />,
  danger: <PiXCircle size={48} className="text-red-600" />,
  success: <PiCheckCircle size={48} className="text-green-600" />,
  warning: <PiWarning size={48} className="text-yellow-600" />,
};

export function Alert({ title, onClose, message, severity }: AlertProps) {
  const t = useTranslations();

  return (
    <motion.div
      className={style({ severity })}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-3 right-3">
        <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700">
          <PiX size={20} />
        </button>
      </div>

      {icons[severity]}

      <p className="mt-2 text-lg font-bold">{title}</p>

      <p className="my-4 text-sm">{message}</p>

      <Button
        soft
        onClick={onClose}
        className="mt-2"
        variant={severity === "info" ? "primary" : severity}
      >
        {t("shared.close")}
      </Button>
    </motion.div>
  );
}

export const style = tv({
  base: "relative flex w-96 flex-col items-center rounded-lg border px-6 py-8 text-center shadow-lg",
  variants: {
    severity: {
      info: "border-blue-600 bg-blue-100 text-blue-900",
      danger: "border-red-600 bg-red-100 text-red-900",
      success: "border-green-600 bg-green-100 text-green-900",
      warning: "border-yellow-600 bg-yellow-100 text-yellow-900",
    },
  },
});
