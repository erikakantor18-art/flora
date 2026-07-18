"use client";

import { cn } from "@/lib/utils";

type ProgressColor =
  | "blue"
  | "emerald"
  | "purple"
  | "orange"
  | "red"
  | "yellow";

interface ProgressProps {
  value: number;
  max?: number;
  color?: ProgressColor;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
  striped?: boolean;
  className?: string;
}

const colors: Record<ProgressColor, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
};

const heights = {
  sm: "h-2",
  md: "h-3",
  lg: "h-5",
};

export default function Progress({
  value,
  max = 100,
  color = "blue",
  size = "md",
  showLabel = false,
  animated = true,
  striped = false,
  className,
}: ProgressProps) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-full bg-slate-200",
          heights[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full",
            colors[color],
            animated && "transition-all duration-700 ease-out",
            striped &&
              "bg-[linear-gradient(45deg,rgba(255,255,255,.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.25)_50%,rgba(255,255,255,.25)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"
          )}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {showLabel && (
        <div className="mt-2 flex justify-end">
          <span className="text-sm font-semibold text-slate-500">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
}