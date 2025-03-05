import { DetailedHTMLProps, LiHTMLAttributes } from "react";

type BaseProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

type DropdownItemProps = BaseProps;

export function DropdownItem({ ...rest }: DropdownItemProps) {
  return (
    <li
      className="cursor-pointer px-4 py-2 transition-all hover:text-blue-700 dark:hover:text-blue-400"
      {...rest}
    >
      {rest.children}
    </li>
  );
}
