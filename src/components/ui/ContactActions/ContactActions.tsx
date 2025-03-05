"use client";

import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { PiChatCenteredDotsDuotone, PiX } from "react-icons/pi";
import { tv } from "tailwind-variants";

import { Button } from "../Button";
import { Card } from "../Card";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ContactActionsProps = BaseProps;

export function ContactActions({ children, ...rest }: ContactActionsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const current = divRef.current;
      const eventWasOutside = current && !current.contains(event.target as Node);

      if (eventWasOutside) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div ref={divRef} className="fixed right-10 bottom-10 z-50" {...rest}>
      <Button shape="rounded" onClick={toggle}>
        {isOpen ? <PiX size={28} /> : <PiChatCenteredDotsDuotone size={28} />}
      </Button>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={style({ isOpen })}
      >
        <Card>
          <ul className="w-80 divide-y divide-neutral-200 dark:divide-neutral-700">{children}</ul>
        </Card>
      </motion.div>
    </div>
  );
}

const style = tv({
  base: "absolute mt-2 overflow-hidden",
  variants: {
    isOpen: {
      true: "right-0 bottom-16 block",
      false: "hidden",
    },
  },
});
