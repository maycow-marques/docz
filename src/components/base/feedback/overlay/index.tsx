"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { tv } from "tailwind-variants";

export type OverlayPositions = keyof typeof style.variants.position;

type OverlayProps = {
  onClose?: () => void;
  children: ReactNode;
  position?: OverlayPositions;
  transparent?: boolean;
};

export function Overlay({
  onClose,
  children,
  position = "center",
  transparent = false,
}: OverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      key={position}
      className={style({ position, transparent })}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        initial={animations[position].initial}
        animate={animations[position].animate}
        exit={animations[position].exit}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>,
    document.body
  );
}

export const style = tv({
  base: "fixed inset-0 z-50 flex ",
  variants: {
    position: {
      top: "items-start justify-center pt-10",
      left: "items-center justify-start",
      right: "items-center justify-end",
      bottom: "items-end justify-center",
      center: "items-center justify-center",
      "top-left": "items-start justify-start",
      "top-right": "items-start justify-end",
      "bottom-left": "items-end justify-start",
      "bottom-right": "items-end justify-end",
    },
    transparent: {
      true: "pointer-events-none bg-transparent",
      false: "pointer-events-auto bg-black/50 backdrop-blur-sm",
    },
  },
  defaultVariants: {
    position: "center",
    transparent: false,
  },
});

const animations = {
  center: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  top: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  "top-left": {
    initial: { opacity: 0, x: -50, y: -50 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -50, y: -50 },
  },
  "top-right": {
    initial: { opacity: 0, x: 50, y: -50 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 50, y: -50 },
  },
  bottom: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  "bottom-left": {
    initial: { opacity: 0, x: -50, y: 50 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -50, y: 50 },
  },
  "bottom-right": {
    initial: { opacity: 0, x: 50, y: 50 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 50, y: 50 },
  },
  left: {
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  },
  right: {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  },
};
