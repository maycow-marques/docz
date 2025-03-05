import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = BaseProps & {
  id: string;
  helpText?: string; // ✅ Novo campo para mensagens de erro/dicas
  error?: boolean; // ✅ Se verdadeiro, exibe helpText como erro
};

export function Input({ id, type, className, placeholder, helpText, error, ...rest }: InputProps) {
  const { group, input, label, help } = style();

  return (
    <div className="relative">
      <div className={group({ className })}>
        <input
          id={id}
          type={type}
          className={input({ error })}
          placeholder={placeholder}
          {...rest}
        />
        <label htmlFor={id} className={label()}>
          {placeholder}
        </label>
      </div>
      {helpText && <p className={help({ error })}>{helpText}</p>}
    </div>
  );
}

const style = tv({
  slots: {
    group: "relative rounded-lg",
    input:
      "peer h-14 w-full rounded-md border border-gray-300 bg-white px-3 pt-5 text-sm leading-none text-gray-900 transition-all placeholder:invisible focus:bg-neutral-100 focus:outline-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:bg-neutral-700 dark:focus:outline-neutral-200",
    label:
      "absolute top-2 left-3 transform cursor-text text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-gray-400 dark:peer-placeholder-shown:text-neutral-200",
    help: "text-xs transition-all",
  },
  variants: {
    error: {
      true: {
        input: "border-red-500 bg-red-50 text-red-900 placeholder-red-500 focus:outline-red-500",
        help: "text-red-500",
      },
      false: {
        help: "text-gray-500 dark:text-gray-400",
      },
    },
  },
});
