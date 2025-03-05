import { useTranslations } from "next-intl";
import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";
import { tv } from "tailwind-variants";

type BaseProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = BaseProps & {
  size?: keyof typeof style.variants.size;
  soft?: boolean;
  block?: boolean;
  shape?: keyof typeof style.variants.shape;
  variant?: keyof typeof style.variants.variant;
  loading?: boolean;
  disabled?: boolean;
};

export function Button({
  size,
  soft,
  block,
  shape,
  variant,
  loading = false,
  disabled,
  children,
  className,
  ...rest
}: ButtonProps) {
  const t = useTranslations();
  const { button, spinner } = style({ size, soft, block, shape, variant, disabled, loading });

  // Memoriza o tamanho do botão para evitar que ele mude quando estiver em loading
  const buttonContent = useMemo(() => {
    return loading ? (
      <span className="flex items-center gap-2">
        <span className={spinner()}></span>
        {t("shared.loading")}
      </span>
    ) : (
      children
    );
  }, [loading, children]);

  return (
    <button className={button({ className })} disabled={disabled} {...rest}>
      {buttonContent}
    </button>
  );
}

export const style = tv({
  slots: {
    button:
      "inline-flex cursor-pointer items-center justify-center gap-3 font-semibold transition-all duration-200 focus:outline-none",
    spinner: "animate-spin rounded-full border-2 border-white border-t-transparent",
  },
  variants: {
    variant: {
      primary: {
        button: "bg-blue-600 text-white hover:bg-blue-700",
      },
      secondary: {
        button: "bg-neutral-600 text-white hover:bg-neutral-700",
      },
      danger: {
        button: "bg-red-600 text-white hover:bg-red-700",
      },
      success: {
        button: "bg-green-600 text-white hover:bg-green-700",
      },
      warning: {
        button: "bg-yellow-600 text-white hover:bg-yellow-700",
      },
      ghost: {
        button:
          "bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
      },
      black: {
        button: "bg-black text-white hover:bg-gray-900",
      },
      white: {
        button: "bg-white text-black hover:bg-gray-200",
      },
    },
    soft: {
      true: { button: "" },
      false: { button: "" },
    },
    loading: {
      true: { button: "" },
      false: { button: "" },
    },
    size: {
      sm: { button: "h-8 px-3 text-sm" },
      md: { button: "h-10 px-4 text-base" },
      lg: { button: "h-12 px-5 text-lg" },
    },
    disabled: {
      true: { button: "cursor-not-allowed opacity-50" },
    },
    shape: {
      pill: { button: "rounded-full" },
      square: { button: "rounded-none" },
      rounded: { button: "rounded-full" },
      default: { button: "rounded-lg" },
    },
    block: {
      true: { button: "w-full" },
    },
  },
  compoundSlots: [
    {
      slots: ["button"],
      soft: true,
      variant: "primary",
      className: "bg-blue-600/20 text-blue-600/80 hover:bg-blue-600 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "secondary",
      className: "bg-neutral-600/20 text-neutral-600/80 hover:bg-neutral-600 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "danger",
      className: "bg-red-600/20 text-red-600/80 hover:bg-red-600 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "success",
      className: "bg-green-600/20 text-green-600/80 hover:bg-green-600 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "warning",
      className: "bg-yellow-600/20 text-yellow-600/80 hover:bg-yellow-600 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "black",
      className: "bg-black/20 text-black/80 hover:bg-black hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "white",
      className: "bg-white/20 text-white/80 hover:bg-white hover:text-black",
    },
    {
      slots: ["button"],
      size: "sm",
      shape: "rounded",
      className: "h-auto p-3 text-sm",
    },
    {
      slots: ["button"],
      size: "md",
      shape: "rounded",
      className: "h-auto p-4 text-base",
    },
    {
      slots: ["button"],
      size: "lg",
      shape: "rounded",
      className: "h-auto p-5 text-lg",
    },
    {
      slots: ["spinner"],
      size: "sm",
      loading: true,
      className: "h-4 w-4",
    },
    {
      slots: ["spinner"],
      size: "md",
      loading: true,
      className: "h-5 w-5",
    },
    {
      slots: ["spinner"],
      size: "lg",
      loading: true,
      className: "h-6 w-6",
    },
  ],
  defaultVariants: {
    size: "md",
    soft: false,
    block: false,
    shape: "default",
    variant: "primary",
  },
});
