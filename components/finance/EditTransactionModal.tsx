"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Transaction } from "./TransactionCard";

interface EditTransactionModalProps {
  open: boolean;
  transaction: Transaction | null;
  onClose: () => void;
}

export default function EditTransactionModal({
  open,
  transaction,
  onClose,
}: EditTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!transaction) return;

    setTitle(transaction.title);
    setAmount(transaction.amount.toString());
    setCategory(transaction.category);
    setDate(transaction.date);
  }, [transaction]);

  if (!open || !transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Edit Transaction
            </h2>

            <p className="text-sm text-slate-500">
              Update your transaction
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <Input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Title"
          />

          <Input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            placeholder="Amount"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="h-11 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-emerald-500"
          >
            <option>Food</option>
            <option>Transportation</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Investment</option>
            <option>Other</option>
          </select>

          <Input
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <textarea
            rows={4}
            placeholder="Notes..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-emerald-500"
          />

          <div className="flex gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button fullWidth>
              Update Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}