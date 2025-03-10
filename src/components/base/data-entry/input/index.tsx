import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { tv } from "tailwind-variants";

import { Icon } from "../../general/icon";

type BaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = BaseProps & {
  id: string;
  error?: boolean;
  helpText?: string;
} & ({ type?: "password"; showHide: boolean } | { type?: "text"; showHide?: never });

export function Input({
  id,
  type = "text",
  showHide,
  className,
  placeholder,
  helpText,
  error,
  ...rest
}: InputProps) {
  const [show, setShow] = useState<boolean>(false);
  const { group, input, label, help } = style({ error });

  return (
    <div className="relative">
      <div className={group({ className })}>
        <input
          id={id}
          type={type === "password" && showHide ? (show ? "text" : "password") : type}
          className={input()}
          placeholder={placeholder}
          {...rest}
        />
        <label htmlFor={id} className={label()}>
          {placeholder}
        </label>
        {type === "password" && showHide && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="hover:text-primary-100/40 border-surface-divisor-100 bg-surface-300 absolute top-0 right-0 bottom-0 grid cursor-pointer place-content-center rounded-md border px-3 "
          >
            <Icon size={20} name={show ? "PiEyeDuotone" : "PiEyeSlashDuotone"} />
          </button>
        )}
      </div>
      {helpText && <p className={help({ error })}>{helpText}</p>}
    </div>
  );
}

const style = tv({
  slots: {
    group: "relative rounded-lg",
    input:
      "peer text-foreground border-surface-divisor-100 bg-surface-100 focus:ring-primary-100/30 h-14 w-full rounded-md border-2 px-3 pt-5 text-sm leading-none transition-all outline-none placeholder:invisible focus:ring-4",
    label:
      "absolute top-2 left-3 transform cursor-text text-xs font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-semibold",
    help: "mt-1 text-xs transition-all",
  },
  variants: {
    error: {
      true: {
        input:
          "border-error-100 text-error-100 placeholder-error-50 focus:ring-error-100/30 bg-error-50",
        label:
          "peer-focus:text-error-100/50 text-error-100/50 peer-placeholder-shown:text-error-100/70",
        help: "text-error-100",
      },
      false: {
        label: "peer-focus:text-body/50 text-body/50 peer-placeholder-shown:text-body/70",
        help: "text-muted",
      },
    },
  },
});
