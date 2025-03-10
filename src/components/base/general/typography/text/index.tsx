import { DetailedHTMLProps, HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

type TextProps = BaseProps & {
  as?: "p" | "span";
  muted?: boolean;
};

export function Text({ as: Tag = "p", muted = false, children, className, ...rest }: TextProps) {
  return (
    <Tag className={style({ muted, className })} {...rest}>
      {children}
    </Tag>
  );
}

const style = tv({
  base: "",
  variants: {
    muted: {
      true: "text-muted",
      false: "text-body",
    },
  },
});
