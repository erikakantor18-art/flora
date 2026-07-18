"use client";

import { ReceiptText, Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface EmptyTransactionProps {
  onAdd?: () => void;
}

export default function EmptyTransaction({
  onAdd,
}: EmptyTransactionProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <ReceiptText size={38} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Transactions Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        Start tracking your finances by adding your first income or expense.
        Every journey begins with a single transaction.
      </p>

      <div className="mt-8">
        <Button onClick={onAdd}>
          <Plus size={18} />
          Add First Transaction
        </Button>
      </div>
    </div>
  );
}