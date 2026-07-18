import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  title,
  description,
  action,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>

          {description && (
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="flex shrink-0 items-center">
            {action}
          </div>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}