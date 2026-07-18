"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface DeleteConfirmModalProps {
  open: boolean;
  title?: string;
  description?: string;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  open,
  title = "Delete Transaction",
  description = "This action cannot be undone. Are you sure you want to delete this transaction?",
  loading = false,
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle size={32} />
        </div>

        <h2 className="mt-5 text-center text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-center text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-8 flex gap-3">
          <Button
            variant="outline"
            fullWidth
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            fullWidth
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}