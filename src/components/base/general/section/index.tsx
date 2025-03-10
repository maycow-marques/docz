import { DetailedHTMLProps, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type SectionTags = "section" | "article" | "div" | "aside" | "header" | "footer" | "main";

type SectionProps = BaseProps & { as?: SectionTags; square?: boolean };

export function Section({
  as: Tag = "section",
  square = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag className={style({ square, className })} {...rest}>
      {children}
    </Tag>
  );
}

const style = tv({
  base: "bg-surface-200 border-surface-divisor-200 border",
  variants: {
    square: {
      false: "rounded-md",
    },
  },
});
