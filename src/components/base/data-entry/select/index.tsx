import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SelectProps = BaseProps & {
  id: string;
  label: string;
  error?: boolean;
  helpText?: string;
};

export function Select({ id, error, label: labelTxt, helpText, children, ...rest }: SelectProps) {
  const { group, help, select, label } = style();
  return (
    <div className="relative">
      <div className={group()}>
        <select id={id} className={select()} {...rest}>
          {children}
        </select>
        <label htmlFor={id} className={label()}>
          {labelTxt}
        </label>
      </div>
      {helpText && <p className={help({ error })}>{helpText}</p>}
    </div>
  );
}

const style = tv({
  slots: {
    group: "relative rounded-lg",
    select:
      "peer text-foreground border-surface-divisor-100 bg-surface-100 focus:ring-primary-100/30 h-14 w-full rounded-md border-2 px-3 pt-5 text-sm leading-none transition-all outline-none focus:ring-4",
    label: "text-body/50 absolute top-2 left-3 z-50 transform cursor-text text-xs",
    help: "text-xs transition-all",
  },
  variants: {
    error: {
      true: {
        input: "border-error-100 text-error-100 focus:ring-error-100/30 bg-red-50",
        help: "text-light-error dark:text-dark-error",
      },
      false: {
        help: "text-muted",
      },
    },
  },
});
