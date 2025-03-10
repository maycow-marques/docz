import { DetailedHTMLProps, HTMLAttributes } from "react";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

type MenuProps = BaseProps;

export function Menu({ children, ...rest }: MenuProps) {
  return <ul {...rest}>{children}</ul>;
}
