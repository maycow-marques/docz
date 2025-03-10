import { motion } from "framer-motion";
import { DetailedHTMLProps, LiHTMLAttributes, ReactNode, useState } from "react";
import { PiCaretDown } from "react-icons/pi";
import { tv } from "tailwind-variants";

import { Icon } from "@/components/base/general/icon";
import { DuoToneIconName } from "@/components/base/general/icon/duotone-icons";
import { Link } from "@/i18n/navigation";
import { Pathnames } from "@/i18n/routing";

type BaseProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

type MenuItemProps = BaseProps & {
  icon: DuoToneIconName;
  title: string;
  href?: Pathnames;
  isSub?: boolean;
  isActive?: boolean;
  isCompressed?: boolean;
  children?: ReactNode;
};

export function MenuItem({
  icon,
  title,
  href,
  isSub = false,
  isActive = false,
  isCompressed = false,
  children,
  ...rest
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!href && !children) {
    throw new Error(`O item de menu "${title}" precisa ter um 'href' ou 'children'.`);
  }
  if (href && children) {
    throw new Error(`O item de menu "${title}" não pode ter 'href' e 'children' ao mesmo tempo.`);
  }

  return (
    <li className={style({ isActive, isSub, isCompressed })} {...rest}>
      {/* Menu Principal */}
      {href ? (
        <Link href={href} className="flex items-center gap-2">
          <Icon size={20} name={icon} />
          <motion.span
            animate={{
              width: isCompressed ? 0 : "auto",
              opacity: isCompressed ? 0 : 1,
              textAlign: isCompressed ? "center" : "left",
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap"
          >
            {title}
          </motion.span>
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Icon size={20} name={icon} />
            <motion.span
              animate={{
                width: isCompressed ? 0 : "auto",
                opacity: isCompressed ? 0 : 1,
                textAlign: isCompressed ? "center" : "left",
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {title}
            </motion.span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, opacity: isCompressed ? 0 : 1 }}
            transition={{ duration: 0.1 }}
          >
            <PiCaretDown />
          </motion.div>
        </button>
      )}

      {/* Submenu com animação suave */}
      {children && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="relative overflow-hidden"
        >
          {children}
        </motion.ul>
      )}
    </li>
  );
}

const style = tv({
  base: "flex cursor-pointer items-center justify-start py-2 text-sm transition-colors duration-200",
  variants: {
    isActive: {
      true: "text-sidebar-text-active bg-sidebar-box-active",
      false: "text-sidebar-text-body hover:text-sidebar-text-active",
    },
    isSub: {
      true: "px-3",
      false: "",
    },
    isCompressed: {
      true: "justify-center",
      false: "justify-start",
    },
  },
});
