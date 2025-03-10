import { AnimatePresence, motion } from "framer-motion";
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
  const { button } = style({ size, soft, block, shape, variant, disabled, loading });

  const buttonContent = useMemo(() => {
    return (
      <span className="flex items-center gap-2">
        <AnimatePresence>
          {loading && (
            <motion.svg
              className="size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        {children}
      </span>
    );
  }, [loading, children]);

  return (
    <button className={button({ className })} disabled={disabled || loading} {...rest}>
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
        button: "bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-white",
      },
      secondary: {
        button: "bg-secondary-100 hover:bg-secondary-200 active:bg-secondary-300 text-white",
      },
      danger: {
        button: "bg-error-100 hover:bg-error-200 active:bg-error-300 text-white",
      },
      success: {
        button: "bg-success-100 hover:bg-success-200 active:bg-success-300 text-white",
      },
      warning: {
        button: "bg-warning-100 hover:bg-warning-200 active:bg-warning-300  text-white",
      },
      ghost: {
        button: "hover:bg-surface-100 active:bg-surface-200 text-text-foreground bg-transparent",
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
      className:
        "bg-primary-50 hover:bg-primary-100 active:bg-primary-200 text-primary-100 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "secondary",
      className:
        "bg-secondary-50 hover:bg-secondary-100 active:bg-secondary-200 text-secondary-100 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "danger",
      className:
        "bg-error-50 hover:bg-error-100 active:bg-error-200 text-error-100 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "success",
      className:
        "bg-success-50 hover:bg-success-100 active:bg-success-200 text-success-100 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "warning",
      className:
        "bg-warning-50 hover:bg-warning-100 active:bg-warning-200 text-warning-100 hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "black",
      className: "bg-black/20 text-black hover:bg-black hover:text-white",
    },
    {
      slots: ["button"],
      soft: true,
      variant: "white",
      className: "bg-gray-100 text-black hover:bg-white",
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
