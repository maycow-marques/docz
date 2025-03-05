import { DetailedHTMLProps, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type CardProps = BaseProps;

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div className={style({ className })} {...rest}>
      {children}
    </div>
  );
}

const style = tv({
  base: "rounded-md border border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
});
