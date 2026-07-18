import { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: string;
  valueClassName?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  valueClassName = "text-slate-900",
}: StatCardProps) {
  const positive =
    !trend ||
    trend === "+" ||
    trend === "▲" ||
    (!trend.startsWith("-") &&
      !trend.startsWith("▼"));

  return (
    <Card className="group overflow-hidden">
      <CardContent>
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-slate-500">
              {title}
            </p>

            <h2
              className={`mt-2 truncate text-2xl font-bold tracking-tight sm:text-3xl ${valueClassName}`}
            >
              {value}
            </h2>

            {subtitle && (
              <p className="mt-1 text-sm text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          <div className="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            {icon}
          </div>
        </div>

        {trend && (
          <div className="mt-6">
            <div
              className={`flex items-center gap-2 text-sm font-semibold ${
                positive
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}
            >
              {positive ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}

              <span>{trend}</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full w-3/4 rounded-full ${
                  positive
                    ? "bg-gradient-to-r from-emerald-500 to-green-400"
                    : "bg-gradient-to-r from-red-500 to-rose-400"
                }`}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}