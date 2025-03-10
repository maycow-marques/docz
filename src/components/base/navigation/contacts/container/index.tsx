"use client";

import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";

import { Button } from "@/components/base/general/button";
import { Icon } from "@/components/base/general/icon";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ContactsProps = BaseProps;

export function Contacts({ children, ...rest }: ContactsProps) {
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
    <div ref={divRef} className="fixed right-5 bottom-5 z-50" {...rest}>
      <Button shape="rounded" onClick={toggle}>
        {isOpen ? (
          <Icon name="PiXDuotone" size={24} />
        ) : (
          <Icon name="PiChatCenteredDotsDuotone" size={24} />
        )}
      </Button>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={style({ isOpen })}
      >
        <div className="bg-surface-200 border-surface-divisor-200 rounded-md border">
          <ul className="divide-surface-divisor-200 w-80 divide-y">{children}</ul>
        </div>
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
