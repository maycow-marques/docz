"use client";

import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type DropdownProps = BaseProps & {
  label: string | ReactNode;
  direction?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  showChevron?: boolean;
};

export function Dropdown({
  label,
  showChevron = false,
  direction = "bottom-left",
  className,
  ...rest
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { button, collapse, container, icon, list } = style({ isOpen, direction });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const current = dropdownRef.current;
      const eventWasOutside = current && !current.contains(event.target as Node);

      if (eventWasOutside) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={container({ className })} {...rest}>
      <button onClick={() => setIsOpen(!isOpen)} className={button()}>
        {label}
        {showChevron && <LuChevronDown className={icon()} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={collapse()}
      >
        <div className="bg-surface-200 border-surface-divisor-200 border">
          <ul className={list()}>{rest.children}</ul>
        </div>
      </motion.div>
    </div>
  );
}

const style = tv({
  slots: {
    container: "relative inline-block",
    button: "flex cursor-pointer items-center gap-2 rounded-md p-1 transition-all",
    icon: "h-4 w-4 transition-transform",
    collapse: "absolute mt-2 overflow-hidden",
    list: "py-2",
  },
  variants: {
    isOpen: {
      true: {
        icon: "rotate-180",
        button: "text-light-accent dark:text-dark-accent",
        collapse: "block",
      },
      false: {
        collapse: "hidden",
      },
    },
    direction: {
      "top-left": {
        collapse: "bottom-12 left-0",
      },
      "top-right": {
        collapse: "right-0 bottom-12",
      },
      "bottom-left": {
        collapse: "top-10 left-0",
      },
      "bottom-right": {
        collapse: "top-10 right-0",
      },
    },
  },
});
