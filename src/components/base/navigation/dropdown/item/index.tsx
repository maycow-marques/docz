import { DetailedHTMLProps, LiHTMLAttributes } from "react";

type BaseProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

type DropdownItemProps = BaseProps;

export function DropdownItem({ ...rest }: DropdownItemProps) {
  return (
    <li className="hover:text-primary-200 cursor-pointer px-4 py-2 transition-all" {...rest}>
      {rest.children}
    </li>
  );
}
