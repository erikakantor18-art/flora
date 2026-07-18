import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-2xl border bg-white px-4 text-sm transition-all duration-200",
          "placeholder:text-slate-400",
          "focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400",
          "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70",

          error
            ? "border-red-500 focus:ring-red-400 focus:border-red-500"
            : "border-slate-300",

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };