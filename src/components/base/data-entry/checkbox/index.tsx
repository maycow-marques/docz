import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { LuCheck } from "react-icons/lu";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CheckboxProps = BaseProps & {
  id: string;
  error?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Checkbox({
  id,
  label,
  checked,
  error,
  onChange,
  className,
  ...rest
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);
  const { container, input, box, check, labelStyle } = style();

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label htmlFor={id} className={container({ className })}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={input()}
        data-testid="checkbox"
        {...rest}
      />
      <div className={box({ error, checked: isChecked })}>
        {isChecked && <LuCheck className={check()} />}
      </div>
      {label && <span className={labelStyle()}>{label}</span>}
    </label>
  );
}

const style = tv({
  slots: {
    container: "flex cursor-pointer items-center gap-2",
    input: "hidden",
    box: "flex h-5 w-5 items-center justify-center rounded-md border transition-all",
    check: "size-4 stroke-3 text-white",
    labelStyle: "text-body text-sm",
  },
  variants: {
    checked: {
      true: {
        box: "border-blue-500 bg-blue-500",
      },
      false: {
        box: "bg-surface-100 border-surface-divisor-200 ring-primary-100/20 hover:ring-2 active:ring-2",
      },
    },
    error: {
      true: {
        box: "border-error-100 bg-error-50",
        labelStyle: "text-error-100",
      },
    },
  },
});
