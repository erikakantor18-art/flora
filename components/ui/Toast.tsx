"use client";

import { CheckCircle2, CircleAlert, Info, X } from "lucide-react";

type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastProps {
  open: boolean;
  title: string;
  description?: string;
  variant?: ToastVariant;
  onClose: () => void;
}

const styles = {
  success: {
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  error: {
    icon: CircleAlert,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  warning: {
    icon: CircleAlert,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  info: {
    icon: Info,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
};

export default function Toast({
  open,
  title,
  description,
  variant = "success",
  onClose,
}: ToastProps) {
  if (!open) return null;

  const style = styles[variant];
  const Icon = style.icon;

  return (
    <div className="fixed right-5 top-5 z-[999] animate-in slide-in-from-right duration-300">
      <div
        className={`flex min-w-[340px] items-start gap-4 rounded-2xl border p-4 shadow-xl ${style.bg} ${style.border}`}
      >
        <div className={style.color}>
          <Icon size={26} />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-1 transition hover:bg-black/5"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}