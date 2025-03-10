import { DetailedHTMLProps, HTMLAttributes } from "react";

type BaseProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

type TitleProps = BaseProps & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Title({ as: Tag, children, className, ...rest }: TitleProps) {
  return (
    <Tag className={`text-foreground font-semibold ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
