import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  loading?: boolean;

  loadingText?: string;
}

const variants = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98]",

  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200",

  outline:
    "border border-slate-300 bg-white hover:bg-slate-50",

  ghost:
    "hover:bg-slate-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "h-9 px-3 text-sm",

  md: "h-11 px-5 text-sm sm:text-base",

  lg: "h-12 px-6 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      loading = false,
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />

            {loadingText ?? children}
          </>
        ) : (
          <>
            {leftIcon}

            {children}

            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };